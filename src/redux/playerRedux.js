import { createSlice } from "@reduxjs/toolkit";
//cartSlice
const playerSlice = createSlice({
  name: "player", //cart
  initialState: {
    episodes: [], //products
    // episodeIndex:0
  },
  reducers: {
    addEpisode: (state, action) => {
      console.log(action.payload.episodes);
      state.episodes = [...action.payload.episodes];
    },
    removeEpsiode: (state) => {
      state.episodes = [];
    },
  },
});
export const { addEpisode, removeEpsiode } = playerSlice.actions;
export default playerSlice.reducer;
