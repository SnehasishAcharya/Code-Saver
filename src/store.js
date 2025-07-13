import { configureStore } from '@reduxjs/toolkit'
import KeeperReducer from './redux/keeperSlice'

export const store = configureStore({
  reducer: {
    keeper: KeeperReducer,
  },
})