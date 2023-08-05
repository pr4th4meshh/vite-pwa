import { createReducer } from "@reduxjs/toolkit"

const initialState = {
  amount: 0,
}

export const customReducer = createReducer(initialState, {
  add: (state) => {
    state.amount += 100
  },

  addByValue: (state, action) => {
    state.amount += action.payload
  },

  minus: (state) => {
    state.amount -= 100
  },
})
