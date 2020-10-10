import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { fetchImages, fetchMovie, fetchSimilar, fetchVideos } from "../../api/movies";
import Tabs from "../../components/Tabs";
import About from "../../components/About";
import { fetchCredits } from "../../api/cast";
import Slider from "../../components/Slider";
import Videos from "../../components/Videos";
import Gallery from "../../components/Gallery";

const tabs = ["О фильме", "Трейлеры", "Галерея"];

const Movie = ({movie}) => {

  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (!movie) return null;

  return (
    <div className="movie">
      <Banner data={movie.data} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="movie__content">
        {activeTab === "О фильме" && 
        <>
          <About data={movie.data} />
          <Slider 
            title="Актерский состав"
            items={movie.cast}
            titleKey="name"
            imgKey="profile_path" />
        </>}
        {activeTab === "Трейлеры" &&
          <>
            <Videos videos={movie.videos}/>
          </>
        }
        {activeTab === "Галерея" && 
        <>
          <Gallery images={movie.images}/>
        </>}
      </div>
      <Slider
        title="Похожие"
        items={movie.similar}
      />
    </div>
  );
};

export async function getServerSideProps(context){
  const movie = await fetchMovie(context.params.id);
    const cast = await fetchCredits(context.params.id);
    const similar = await fetchSimilar(context.params.id);
    const videos = await fetchVideos(context.params.id);
    const images = await fetchImages(context.params.id);

    return{
      props:{
        movie:{
          data: movie || null,
          cast: cast ? cast.cast : [],
          similar: similar ? similar.results : [],
          videos: videos ? videos.results : [],
          images: images ? images : [],
        }
      }
    }
}

export default Movie;
