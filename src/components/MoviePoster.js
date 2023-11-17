import React from "react";
import { POSTER_PATH_URL } from "../utils/constents";

function MoviePoster({ poster }) {
  return (
    <div className="w-[10rem] p-2">
      <img src={POSTER_PATH_URL + poster} alt="" />
    </div>
  );
}

export default MoviePoster;
