import { createSlice } from "@reduxjs/toolkit";

const pickupSlice = createSlice({
  name: "pickup",
  initialState: {},
  reducers: {
    setPickupSlice: (state, action) => {
      state.pickup = action.payload;
    },
  },
});
export const { setPickupSlice } = pickupSlice.actions;

export default pickupSlice.reducer;
