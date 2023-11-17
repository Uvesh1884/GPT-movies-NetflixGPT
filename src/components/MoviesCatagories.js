import React from "react";
import MoviePoster from "./MoviePoster";

function MoviesCatagories({ title, movies,Popmovies }) {
  // console.log(Popmovies);
  return (
    <div className=" relative top-[-7rem] z-20 bg-transparent bg-black w-[100vw] pl-4">
    <h1 className="text-lg md:text-2xl py-1 px-[4] pb- shadow-xl from-black w-full text-white ">{title}</h1>
    <div className="flex overflow-x-scroll no-scrollbar px-4 ">
      <div className="flex pb-2">
          {movies?.map((movie) => (
            <MoviePoster key={movie.id} poster = {movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesCatagories;
