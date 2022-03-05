import { createSlice } from "@reduxjs/toolkit";
import { getPostsAPI } from "./data.api";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPostsAPI.pending, (state) => {
        state.posts = [];
      })
      .addCase(getPostsAPI.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      .addCase(getPostsAPI.rejected, (state) => {
        state.posts = [];
      });
  },
});
// export const { getData } = postsSlice.actions;
export default postsSlice.reducer;
