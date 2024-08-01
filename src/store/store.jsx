import { configureStore } from "@reduxjs/toolkit";
import pickupSlice from "./slices/pickupSlice";

const store = configureStore({
    reducer: {
        pickupSlice: pickupSlice,
    },
}); // ...
export default store