import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './playerRedux'

export default configureStore({
    reducer:{
        player:playerReducer,
        
    }
})