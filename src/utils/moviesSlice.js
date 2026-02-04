import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailerMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
