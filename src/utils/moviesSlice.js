import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name : "movies",
    initialState : {
       AddNowPlayingMovies : null,
       MoviesTrailars : null,
       PopulerMovies : null,
       TopRatedMovies : null
        },
    reducers : {
        addNowPlayingmovies : (state, action)=>{
            
            state.AddNowPlayingMovies = action.payload;
        },
        addMoviesTrailars : (state, action)=>{

            state.MoviesTrailars = action.payload;
        },
        addPopulerMovies : (state, action)=>{

            state.PopulerMovies = action.payload;
        },
        addTopRatedMovies : (state, action)=>{

            state.TopRatedMovies = action.payload;
        }
    }
});

export const { addNowPlayingmovies, addMoviesTrailars, addPopulerMovies,addTopRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;