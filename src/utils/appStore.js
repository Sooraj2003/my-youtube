import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice.js"
import sideBarReducer from "./sideBarSlice.js"
import cacheReducer from "./searchSlice.js";
import chatSlice from "./chatSlice.js";

const appStore = configureStore({
    reducer:{
     videos:videosReducer,
     sideBar:sideBarReducer,
     cache:cacheReducer,
     chat:chatSlice
    }
})


export default appStore;