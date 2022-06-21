import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import podcastPlayerSlice from "./podcast-slice";
import musicPlayerSlice from "./music-slice";

import audioBookPlayerSlice from "./audioBook-slice";

const store =  configureStore({
    // reducer:{
    //     player:playerReducer,
        
    // }
    reducer:{
       auth :authSlice.reducer,
       music:musicPlayerSlice.reducer,
       podcast:podcastPlayerSlice.reducer,
       audioBook:audioBookPlayerSlice.reducer
    }
   
});

export default store;