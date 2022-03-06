import { createSlice } from "@reduxjs/toolkit";
import { getRetweetsAPI } from "./data.api";

const retweetsSlice = createSlice({
  name: "Retweets",
  initialState: {
    retweets: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRetweetsAPI.pending, (state) => {
        state.retweets = [];
      })
      .addCase(getRetweetsAPI.fulfilled, (state, action) => {
        state.retweets = action.payload;
      })

      .addCase(getRetweetsAPI.rejected, (state) => {
        state.retweets = [];
      });
  },
});

export default retweetsSlice.reducer;
