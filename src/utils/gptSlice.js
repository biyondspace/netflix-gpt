import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
  },
  reducers: {
    toggleGptsearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResults;
    },
  },
});

export const { toggleGptsearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
