import { createSlice } from "@reduxjs/toolkit";


const sideBarSlice = createSlice({
    name:"ToggleSideBar",
    initialState:{
        showSideBar : true
    },
    reducers:{
        toggleSideBar :(state,action)=>{
            state.showSideBar=!state.showSideBar
        },
        closeSideBar :(state,action)=>{
            state.showSideBar=false;
        }
    }
})

export const {toggleSideBar,closeSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer;