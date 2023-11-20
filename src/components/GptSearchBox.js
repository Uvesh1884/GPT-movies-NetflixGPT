import { useRef } from "react";
import { lang } from "../utils/language";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constents";

function GptSearchBox() {
  const langkey = useSelector((store) => store.config.LenguageSelect);

  const InputText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleInputText = async () => {
    console.log(InputText.current.value);

    // call GPT search API

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      InputText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Don, Ghost, Nowhere, Khufiya, Jawan";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptmovies =
      gptSearchResults?.choices[0]?.message?.content.split(" ,");
    console.log(gptmovies);

    const promiseArray = gptmovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);
  };
  return (
    <div>
      <div className="bg-black shadow-xl shadow-white shadow-inner flex rounded-full justify-center absolute my-[10rem] mx-[22rem] w-[40rem] h-[3rem]">
        <input
          ref={InputText}
          type="search"
          className="bg-transparent text-white border-none outline-none text-center w-full"
          placeholder={lang[langkey]?.gptSearchPlaceholder}
        />
        <button
          className="bg-white text-black rounded-full w-[10rem]"
          onClick={handleInputText}
        >
          {lang[langkey]?.search}
        </button>
      </div>
    </div>
  );
}

export default GptSearchBox;
