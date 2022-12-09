import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../features/task/taskSlice";

export default configureStore({
  reducer: {
    dTask: taskReducer
  },
  devTools: true
})