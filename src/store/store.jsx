import { configureStore } from "@reduxjs/toolkit";
import pickupSlice from "./slices/pickupSlice";
import sidebarToggle from "./slices/sidebarToggle";
import currentUserSlice from "./slices/currentUserSlice";
import newEventSlice from "./slices/newEventSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  pickupSlice: pickupSlice,
  currentUserSlice: currentUserSlice,
  sidebarToggle: sidebarToggle,
  newEventSlice: newEventSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
