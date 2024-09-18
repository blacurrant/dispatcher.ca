import { createSlice } from "@reduxjs/toolkit";

const sidebarToggle = createSlice({
  name: "sidebar",
  initialState: { sidebar: false },
  reducers: {
    setSidebarToggle: (state, action) => {
      console.log(action);
      state.sidebar = !state.sidebar;
    },
  },
});
export const { setSidebarToggle } = sidebarToggle.actions;

export default sidebarToggle.reducer;
