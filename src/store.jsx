import { configureStore } from "@reduxjs/toolkit"
// import { customReducer } from "./reducer"
import walletSlice  from "./WalletSlice"

const store = configureStore({
  reducer: {
    wallet: walletSlice,
  },
})

export default store
