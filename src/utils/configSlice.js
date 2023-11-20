import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({

    name : "config",
    initialState: {
        LenguageSelect: "en",
    },
    reducers : {
        changeLanguage : (state,action)=>{
            state.LenguageSelect = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;