
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice.js";

export const store = configureStore({

    reducer: {
        user: UserReducer
    }

})

