import { createSlice } from "@reduxjs/toolkit";

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

export const {} = userDetail.actions;
export default userDetail.reducer;
