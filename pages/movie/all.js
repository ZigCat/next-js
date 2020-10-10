import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import { fetchNowPlaying, fetchPopularMovies, fetchRatedMovies, fetchUpcomingMovies, fetvhNowPlaying } from "../../api/movies";
import Slider from "../../components/Slider";

const Main = ({
    popular,
    rated,
    now,
    upcoming,
    randomData,
}) => {

  return (
    <div>
      <Banner data={randomData} />
      <Slider title="Популярные фильмы" items={popular} />
      <Slider
        title="Показывают сейчас"
        items={now}
      />
      <Slider
        title="Скоро будут"
        items={upcoming}
      />
      <Slider 
        title="Высоко оцененные"
        items={rated}
      />
    </div>
  );
};

export async function getServerSideProps() {
  
  const { results: popular } = await fetchPopularMovies();
  const { results: rated } = await fetchRatedMovies();
  const { results: now } = await fetchNowPlaying();
  const { results: upcoming } = await fetchUpcomingMovies();
  const bannerData = popular;
  const randomData = bannerData[Math.floor(Math.random() * bannerData.length)];

  return {
    props: {
      popular,
      rated,
      now,
      upcoming,
      randomData,
    },
  };
}

export default Main;