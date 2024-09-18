import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: null,
  },
  reducers: {
    setCurrentUserSlice: (state, action) => {
      console.log(action, "action");
      
      state.userInfo = action?.payload;
    },
  },
});
export const { setCurrentUserSlice } = currentUserSlice.actions;

export default currentUserSlice.reducer;
