import { configureStore } from "@reduxjs/toolkit";
import getCategories from "./Slices/getCategories";

export default configureStore({
  reducer: {
    getCategories,
  },
});
