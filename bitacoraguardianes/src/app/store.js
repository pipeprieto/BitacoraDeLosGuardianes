import {configureStore} from "@reduxjs/toolkit"
import heroReducer from "../features/heroslice"
import thunk from "redux-thunk"

export const store = configureStore({
    reducer:{
        heroSlice:heroReducer
    },
    middleware:[thunk]
})