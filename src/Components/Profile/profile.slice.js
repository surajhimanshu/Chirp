import { createSlice } from "@reduxjs/toolkit";
import {  getIndividualUserProfileApi, getIndividualUserPostsApi } from "./profile.api";

const initialState = {individualUserProfile:{},individualUserPosts:[]};


const profileSlice = createSlice({
    name : "PROFILE",
    initialState,
    extraReducers(builder){
        builder
        .addCase(getIndividualUserProfileApi.fulfilled ,(state,action)=>{
            state.individualUserProfile = action.payload;
        })
        .addCase(getIndividualUserPostsApi.fulfilled ,(state,action)=>{
            state.individualUserPosts = action.payload;
        })

    }
})

export default profileSlice.reducer;