import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Tabs from "../../components/Tabs";
import About from "../../components/About";
import { fetchTvCredits } from "../../api/cast";
import Slider from "../../components/Slider";
import { fetchTv, fetchTvSimilar } from "../../api/tv";

const tabs = ["О фильме", "Трейлеры", "Галерея"];

const Tv = () => {
    const [tv, setTv] = useState(null);
    const { id: tvID } = useParams();
    const [activeTab, setActiveTab] = useState(tabs[0]);

    if(!tv) return null;

      return(
        <div className="movie">
            <Banner data={tv.data} />
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            <div className="movie__content">
                {activeTab === "О фильме" && 
                <>
                <About data={tv.data} />
                <Slider 
                    title="Актерский состав"
                    items={tv.cast}
                    titleKey="name"
                    imgKey="profile_path"
                    link="/person" />
                </>}
                {activeTab === "Трейлеры" &&
                <>
                Lorem Ipsum
                </>
                }
            </div>
            <Slider
                title="Похожие"
                items={tv.similar}
                link="/tv"
            />
            </div>
      );
};

export async function getServerSideProps(){
  const tv = await fetchTv(tvID);
  const cast = await fetchTvCredits(tvID);
  const similar = await fetchTvSimilar(tvID);

  return{
    props: {
      tv:{
        data: tv || null,
        cast: cast ? cast.cast : [],
        similar: similar ? similar.results : [],
      }
    },
  };
}



export default Tv;