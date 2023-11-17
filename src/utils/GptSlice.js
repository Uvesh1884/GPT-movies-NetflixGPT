import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name : 'gpt',
    initialState :{
        toggleGptsearchBox : false,
    },
    reducers :{
        
        showGptSearchBox : (state,action)=>{

            state.toggleGptsearchBox = !state.toggleGptsearchBox
        }
    }
});

export const {showGptSearchBox} = GptSlice.actions;
export default GptSlice.reducer;