import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice"
import sideBarReducer from "./sideBarSlice"
import cacheReducer from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer:{
     videos:videosReducer,
     sideBar:sideBarReducer,
     cache:cacheReducer,
     chat:chatSlice
    }
})


export default appStore;