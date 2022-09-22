import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CATEGORIES_URL, AUTHORIZATION } from "../API";

export const getCategories = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    getFetchCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(CATEGORIES_URL, AUTHORIZATION);
    dispatch(getFetchCategories(data.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getFetchCategories } = getCategories.actions;
export default getCategories.reducer;
