import { useEffect } from "react"
import { VIDEO_API, API_OPTIONS } from "../../utils/constents";
import { useDispatch } from "react-redux";
import { addMoviesTrailars } from "../../utils/moviesSlice";

const useVideoAPI = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        trailarOfMianMovie()
    },[]);

    const trailarOfMianMovie = async ()=>{

        const data = await fetch(VIDEO_API,API_OPTIONS);

        const json = await data.json();

        const MovieTrailars = json?.results?.filter(video => video?.type === "Trailer");
        
        const FinalTrailar = MovieTrailars.length ? MovieTrailars[1] : MovieTrailars[0];
        dispatch(addMoviesTrailars(FinalTrailar));

        
    }
};

export default useVideoAPI;