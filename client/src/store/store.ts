import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './slices';
import UISlice from "./UISlice";

const store = configureStore({
    reducer: {
        main: mainReducer,
        ui: UISlice,
    }
})

export type RootSate = ReturnType<typeof store.getState>

export default store;