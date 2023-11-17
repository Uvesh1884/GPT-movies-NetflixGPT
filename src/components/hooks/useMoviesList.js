import { useEffect } from "react"
import { API_OPTIONS, MOVIES_API } from "../../utils/constents";
import { useDispatch } from "react-redux";
import { addNowPlayingmovies } from "../../utils/moviesSlice";


const useMoviesList = ()=>{

    const dispatch = useDispatch();

    const NowPlayingMovies = async ()=>{

        const data = await fetch(MOVIES_API,API_OPTIONS);
    
        const json = await data.json();

       dispatch(addNowPlayingmovies(json.results));

      };

      useEffect(()=>{
        NowPlayingMovies();
    },[]);
};

export default useMoviesList;