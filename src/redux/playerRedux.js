import { createSlice } from "@reduxjs/toolkit";
//cartSlice
const playerSlice = createSlice({
  name: "player", //cart
  initialState: {
    episodes: [], //products
    episodeIndex:0
  },
  reducers: {
    addEpisode: (state, action) => {
      
      state.episodes = action.payload.episodes;
      state.episodeIndex = action.payload.index;
    },
    removeEpsiode: (state) => {
      state.episodes = [];
      state.episodeIndex=0;
    },
  },
});
export const { addEpisode, removeEpsiode } = playerSlice.actions;
export default playerSlice.reducer;
