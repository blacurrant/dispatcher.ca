import { createSlice } from "@reduxjs/toolkit";

const newEventSlice = createSlice({
  name: "eventSlice",
  initialState: {
    data: null
  },
  reducers: {
    setNewEventSlice: (state, action) => {
      state.data = action?.payload;
    },

  },
});
export const { setNewEventSlice } =
  newEventSlice.actions;

export default newEventSlice.reducer;
