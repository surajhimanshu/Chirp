import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  bookmarksUrl,
  postsUrl,
  retweetsUrl,
  usersUrl,
} from "./data.selectors";

export const getPostsAPI = createAsyncThunk("fetchPosts", async () => {
  const response = await axios.get(postsUrl);
  return response.data;
});
export const getUsersAPI = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get(usersUrl);
  return response.data;
});
export const signupUserAPI = createAsyncThunk("signupUser", async (payload) => {
  const response = await axios.post(usersUrl, payload);
  return response.data;
});
export const getRetweetsAPI = createAsyncThunk("fetchRetweets", async () => {
  const response = await axios.get(retweetsUrl);
  return response.data;
});
export const getBookmarksAPI = createAsyncThunk("fetchBookmarks", async () => {
  const response = await axios.get(bookmarksUrl);
  return response.data;
});
