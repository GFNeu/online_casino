import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "NEW_RESULT",
  initialState: [],
  reducers: {
    newResult: (state, action) => [...state, {id: state[state.length-1]?.id+1 || 1, slots: action.payload, date: new Date().toString()}],
    deleteResults: (state, action) => []
  },
});

export const { newResult, deleteResults } = resultsSlice.actions;
export default resultsSlice.reducer;