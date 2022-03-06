import { createSlice } from "@reduxjs/toolkit";
import { getBookmarksAPI } from "./data.api";

const bookmarksSlice = createSlice({
  name: "Bookmarks",
  initialState: {
    bookmarks: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBookmarksAPI.pending, (state) => {
        state.bookmarks = [];
      })
      .addCase(getBookmarksAPI.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })

      .addCase(getBookmarksAPI.rejected, (state) => {
        state.bookmarks = [];
      });
  },
});

export default bookmarksSlice.reducer;
