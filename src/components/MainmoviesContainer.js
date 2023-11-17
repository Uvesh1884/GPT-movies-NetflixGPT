import React from "react";
import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieTrailar from "./MovieTrailar";

function MainmoviesContainer() {
  const movies = useSelector((store) => store?.moviesList?.AddNowPlayingMovies);

  if (movies === null) return;
  const mainMovie = movies[0];

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <MovieTitle title = {original_title} overview={overview} />
      <MovieTrailar />
    </div>
  );
}

export default MainmoviesContainer;
