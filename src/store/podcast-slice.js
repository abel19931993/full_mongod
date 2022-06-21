import { createSlice } from "@reduxjs/toolkit";
const podcastPlayerSlice = createSlice({
  name: "podcast", 
  initialState: {
    episodes: [], 
    episodeIndex:0
  },
  reducers: {
    addEpisode: (state, action) => {
      
      state.episodes = action.payload.episode;
      state.episodeIndex = action.payload.index;
    },
    removeEpisode: (state) => {
      state.episodes = [];
      state.episodeIndex=0;
    },
  }, 
});
export const podcastPlayerActions = podcastPlayerSlice.actions;

export default podcastPlayerSlice;