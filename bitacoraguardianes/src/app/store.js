import {configureStore} from "@reduxjs/toolkit"
import heroReducer from "../features/heroslice"
import villainReducer from '../features/villianslice'
import thunk from "redux-thunk"

export const store = configureStore({
    reducer:{
        heroSlice:heroReducer,
        villainSlice:villainReducer
    },
    middleware:[thunk]
})