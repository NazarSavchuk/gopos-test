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

// fetch("https://newdemostock.gopos.pl/ajax/219/products/530", {
//   "headers": {
//     "accept": "application/json",
//     "accept-language": "en,ru-RU;q=0.9,ru;q=0.8,en-US;q=0.7,uk;q=0.6,pl;q=0.5",
//     "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://newdemostock.gopos.pl/a/219/product/530",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "DELETE",
//   "mode": "cors",
//   "credentials": "include"
// });
