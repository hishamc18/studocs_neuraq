import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "@/features/student/studentSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
