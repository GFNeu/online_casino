import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "SET_USER",
  initialState: {name: ""},
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", action.payload)  
      return state = {name: action.payload}
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;