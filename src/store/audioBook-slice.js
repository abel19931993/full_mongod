import { createSlice } from "@reduxjs/toolkit";
const audioBookPlayerSlice = createSlice({
  name: "audioBook", 
  initialState: {
    chapters: [],
    chapterIndex:0
  },
  reducers: {
    addChapter: (state, action) => {
      
      state.chapters = action.payload.chapter;
      state.chapterIndex = action.payload.index;
    },
    removeChapter: (state) => {
      state.chapters = [];
      state.chapterIndex=0;
    },
  }, 
});
export const audioBookPlayerActions = audioBookPlayerSlice.actions;

export default audioBookPlayerSlice;