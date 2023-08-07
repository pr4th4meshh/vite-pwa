import { createSlice } from "@reduxjs/toolkit"

const walletSlice = createSlice({
  name: "wallet",
  initialState: {amount: 0},
  reducers: {
    add: (state) => {
      state.amount += 100
    },

    addByValue: (state, action) => {
      state.amount += action.payload
    },

    minus: (state) => {
      state.amount -= 100
    },
    reset: (state) => {
      state.amount = 0
    },
  },
})

export const {add, minus, addByValue, reset} = walletSlice.actions
export default walletSlice.reducer
