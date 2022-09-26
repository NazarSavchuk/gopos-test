import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CHANGABLE_PRODUCT_URL, AUTHORIZATION } from "../API";

export const getChangeableProduct = createSlice({
  name: "changeableProduct",
  initialState: {
    changeableProduct: {},
  },
  reducers: {
    getFetchChangeableProduct: (state, action) => {
      state.changeableProduct = action.payload;
    },
  },
});

export const { getFetchChangeableProduct } = getChangeableProduct.actions;
export default getChangeableProduct.reducer;
