import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT_OFFSET } from "./constants.js";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages: (state,action)=>{
            if(state.messages.length>=LIVE_COUNT_OFFSET){
                state.messages.splice(LIVE_COUNT_OFFSET,1);
            }
            state.messages.unshift(action.payload);
        }
    }
});

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;