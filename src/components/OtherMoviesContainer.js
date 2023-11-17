import React from "react";
import { useSelector } from "react-redux";
import MoviesCatagories from "./MoviesCatagories";

function OtherMoviesContainer() {
  const movies = useSelector((store) => store?.moviesList);
  return (
    <div className="bg-black h-fit">
      <MoviesCatagories title = "Now Playing" movies = {movies?.AddNowPlayingMovies} />
      <MoviesCatagories title = "Most Popular" movies = {movies?.PopulerMovies} />
      <MoviesCatagories title = "Top Rated" movies = {movies?.TopRatedMovies} />
      <MoviesCatagories title = "New released" movies = {movies?.AddNowPlayingMovies} />
      <MoviesCatagories title = "Horror" movies = {movies?.AddNowPlayingMovies} />
    </div>
  );
}

export default OtherMoviesContainer;
