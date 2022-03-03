import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/DataApi/posts.slice"
import usersReducer from "../features/DataApi/users.slice"
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
})