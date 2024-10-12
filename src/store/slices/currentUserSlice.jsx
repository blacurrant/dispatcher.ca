import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: null,
    onboardingInfo: null,
    completedOnboarding: false,
  },
  reducers: {
    setCurrentUserSlice: (state, action) => {
      state.userInfo = action?.payload;
    },
    completedOnboarding: (state, action) => {
      console.log("payload", action?.payload);
      state.completedOnboarding = action.payload;
    },
    setOnboardingInfo: (state, action) => {
      state.onboardingInfo = {...state.onboardingInfo , ...action?.payload};
    },
  },
});
export const { setCurrentUserSlice, setOnboardingInfo, completedOnboarding } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
