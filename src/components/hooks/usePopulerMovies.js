import { useEffect } from "react"
import { API_OPTIONS, POPULER_API } from "../../utils/constents";
import { useDispatch } from "react-redux";
import { addPopulerMovies } from "../../utils/moviesSlice";


const usePopulerMovies = ()=>{

    const dispatch = useDispatch();

    const PopulerMovies = async ()=>{

        const data = await fetch(POPULER_API,API_OPTIONS);
    
        const json = await data.json();
        // console.log(json)

       dispatch(addPopulerMovies(json.results));

      };

      useEffect(()=>{
        PopulerMovies();
    },[]);
};

export default usePopulerMovies;