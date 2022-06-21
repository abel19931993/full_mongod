import { createSlice } from "@reduxjs/toolkit";
const musicPlayerSlice = createSlice({
  name: "music", //cart
  initialState: {
    tracks: [], //products
    trackIndex:0
  },
  reducers: {
    addTrack: (state, action) => {
      
      state.tracks = action.payload.tracks;
      state.trackIndex = action.payload.index;
    },
    removeTrack: (state) => {
      state.tracks = [];
      state.trackIndex=0;
    },
  }, 
});
export const musicPlayerActions = musicPlayerSlice.actions;

export default musicPlayerSlice;