import React from "react";
import useVideoAPI from "./hooks/useVidepoAPI";
import { useSelector } from "react-redux";
function MovieTrailar() {

  const trailars = useSelector(store=>store?.moviesList?.MoviesTrailars);
  useVideoAPI();

  return (
    <div className="w-[100vw] top-[-2rem]">
      <iframe autoPlay muted
      className="absolute top-0 w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailars?.key + "?autoplay=1&mute=1&enablejsapi=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
}

export default MovieTrailar;
