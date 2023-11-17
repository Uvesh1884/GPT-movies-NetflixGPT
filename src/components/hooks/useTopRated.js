import { useEffect } from "react"
import { API_OPTIONS, TOPRATED_API } from "../../utils/constents";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../../utils/moviesSlice";


const useTopRated = ()=>{

    const dispatch = useDispatch();

    const TopRatedMovies = async ()=>{

        const data = await fetch(TOPRATED_API,API_OPTIONS);
    
        const json = await data.json();
        console.log(json)

       dispatch(addTopRatedMovies(json.results));

      };

      useEffect(()=>{
        TopRatedMovies();
    },[]);
};

export default useTopRated;