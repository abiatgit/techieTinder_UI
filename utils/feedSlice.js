import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) =>{return action.payload},
    removeUserFromFeed: (state,action ) => {
      if(state===null){
        return state
      }
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload)
      }
    //  const newState= state.filter((item)=> item._id!==action.payload)
    //  return newState;

    }
  },
});

export const { addFeed, removeUserFromFeed} = feedSlice.actions;
export default feedSlice.reducer;
