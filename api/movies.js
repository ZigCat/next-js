import request from "./request";

export const fetchMovie = (id) =>
  request
    .get(`/movie/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchPopularMovies = () =>
  request
    .get(`/movie/popular`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchSimilar = (id) => 
  request
    .get(`/movie/${id}/similar`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchVideos = (id) =>
  request
    .get(`/movie/${id}/videos`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchRatedMovies = () =>
  request
    .get(`/movie/top_rated`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });


export const fetchNowPlaying = () =>
  request
    .get(`/movie/now_playing`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });


export const fetchUpcomingMovies = () =>
  request
    .get(`/movie/upcoming`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchImages = (id) =>
  request
    .get(`/movie/${id}/images`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
  });