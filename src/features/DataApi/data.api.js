import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsUrl, usersUrl } from "./data.selectors";

export const getPostsAPI = createAsyncThunk("fetchPosts", async () => {
  const response = await axios.get(postsUrl);
  return response.data;
});
export const getUsersAPI = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get(usersUrl);
  return response.data;
});
