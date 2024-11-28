import { createSlice } from "@reduxjs/toolkit";

const connectonSlice = createSlice({
  name: "connctions",
  initialState:[],
  reducers: {
    addConnections: (state, action) => action.payload,
    removeConneciton: (state, action) => null,
  },
});

export const {addConnections,removeConneciton} = connectonSlice.actions;
export default connectonSlice.reducer;
