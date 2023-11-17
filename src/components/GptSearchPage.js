import React from "react";
import GptSearchBox from "./GptSearchBox";
import GptMoviesSuggetions from "./GptMoviesSuggetions";
import { PHOTO_URL } from "../utils/constents";

function GptSearchPage() {
  return (
    <div>
         <div className="absolute">
        <img
          src={PHOTO_URL}
          alt=""
        />
      </div>
      <GptSearchBox />
      <GptMoviesSuggetions />
    </div>
  );
}

export default GptSearchPage;
