import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Components/Profile/profile.slice.js";


export const store = configureStore({
    reducer:{
        profile:profileReducer,
    }
})