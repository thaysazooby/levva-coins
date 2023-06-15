import { createStore } from "effector";

import {
  loadCategory,
  loadCreateCategoryDone,
  loadCategoryDone,
  loadCategoryFail,
} from "./CategoryEvents";

import { CategoryState } from "./CategoryState";

const initialState: CategoryState = {
  isLoading: false,
  categories: [],
  hasError: false,
  errorMessage: "",
};

const CategoryStore = createStore<CategoryState>(initialState)
  .on(loadCategory, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadCreateCategoryDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    categories: [data, ...state.categories],
  }))
  .on(loadCategoryDone, (_, data) => ({
    isLoading: false,
    categories: data,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadCategoryFail, (state, data) => ({
    ...state,
    hasError: true,
    errorMessage: data.message,
    isLoading: false,
  }));

export default CategoryStore;
