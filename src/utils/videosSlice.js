import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name:"Videos",
    initialState:{
        videoItems:null
    },
    reducers:{
        addVideoItems:(state,action)=>{
            state.videoItems=action.payload;
        }
    }
})

export const {addVideoItems} = videosSlice.actions;
export default videosSlice.reducer;