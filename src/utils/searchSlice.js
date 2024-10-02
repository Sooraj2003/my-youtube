import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"cache",
    initialState:{

    },
    reducers:{
        addSearchCache: (state,action)=>{
           return {...state,...action.payload}
        }
    }
})

export const {addSearchCache} = searchSlice.actions;
export default searchSlice.reducer;