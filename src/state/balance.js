import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "SET_BALANCE",
  initialState: 99.99,
  reducers: {
    setBalance: (state, action) => {
      localStorage.setItem("balance", action.payload)
      return action.payload
    },
    decreaseBalance: (state, action) => {
      localStorage.setItem("balance", state-1)
      return state > 1? state-1 : 0
    },
    addToBalance: (state, action) => {
      localStorage.setItem("balance", state+action.payload)
      return state+action.payload
    },
  },
});

export const { setBalance, decreaseBalance, addToBalance } = balanceSlice.actions;
export default balanceSlice.reducer;