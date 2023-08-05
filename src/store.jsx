import { configureStore } from "@reduxjs/toolkit"
import { customReducer } from "./reducer"

const store = configureStore({
  reducer: {
    wallet: customReducer,
  },
})

export default store
