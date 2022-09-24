import { configureStore } from "@reduxjs/toolkit";
import getCategories from "./Slices/getCategories";
import getChangeableProduct from "./Slices/getChangeableProduct";

export default configureStore({
  reducer: {
    getCategories,
    getChangeableProduct,
  },
});
