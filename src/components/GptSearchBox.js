import React from "react";
import { lang } from "../utils/language";
import { useSelector } from "react-redux";

function GptSearchBox() {
  const langkey = useSelector(store=>store.config.LenguageSelect)
  return (
    <div>
      <div className="bg-black shadow-xl shadow-white shadow-inner flex rounded-full justify-center absolute my-[10rem] mx-[22rem] w-[40rem] h-[3rem]">
        <input
          type="search"
          className="bg-transparent text-white border-none outline-none text-center w-full"
          placeholder={lang[langkey]?.gptSearchPlaceholder}
        />
        <button className="bg-white text-black rounded-full w-[10rem]">
          {lang[langkey]?.search}
        </button>
      </div>
    </div>
  );
}

export default GptSearchBox;
