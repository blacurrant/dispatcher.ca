import { createSlice } from "@reduxjs/toolkit";

const newEventSlice = createSlice({
  name: "eventSlice",
  initialState: {
    data: {},
    isGoalPresent: false,
  },
  reducers: {
    setNewEventSlice: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    setIsGoalPresent: (state, action) => {
      console.log(action.payload, "action.payload");
      
      state.isGoalPresent = !state.isGoalPresent;
    },
  },
});

export const { setNewEventSlice, setIsGoalPresent } = newEventSlice.actions;

export default newEventSlice.reducer;