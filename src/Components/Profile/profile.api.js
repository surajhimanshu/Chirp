import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get  individual USER via userName and in profile.slice.js it's individualUserProfile
export const getIndividualUserProfileApi = createAsyncThunk(
  "users/profile",
  async (username) => {
    const response = await axios.get(
      `http://localhost:3000/users/?userName=${username}`
    );
    return response.data;
  }
);

//get individual user's posts(tweet) via its username and in profile.slice.js it's individualUserPost
export const getIndividualUserPostsApi = createAsyncThunk(
  "users/post",
  async (username) => {
    const response = await axios.get(
      `http://localhost:3000/posts/?username=${username}`
    );
    return response.data;
  }
);


// get post by category via category name(ex - foryou, trending,sports,etc) and in profile.slice.js it's categoryPosts

export const getCategoryPostsApi = createAsyncThunk(
  "category/post",
  async (categoryName) => {
    const response = await axios.get(
      `http://localhost:3000/posts/?category=${categoryName}`
    );
    return response.data;
  }
);
