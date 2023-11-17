import { useSelector } from "react-redux";
import Header from "./Header";
import MainmoviesContainer from "./MainmoviesContainer";
import OtherMoviesContainer from "./OtherMoviesContainer";
import useMoviesList from "./hooks/useMoviesList";
import usePopulerMovies from "./hooks/usePopulerMovies";
import useTopRated from "./hooks/useTopRated";
import GptSearchPage from "./GptSearchPage";

function Browse() {
  useMoviesList();
  usePopulerMovies();
  useTopRated();
  const GptButton = useSelector((store) => store?.gpt?.toggleGptsearchBox);

  return (
    <div>
      <Header />

      {GptButton ? (
        <GptSearchPage />
      ) : (
        <>
          <MainmoviesContainer />
          <OtherMoviesContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
