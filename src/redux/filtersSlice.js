import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});
// Генератори екшенів
export const { setFilter } = filtersSlice.actions;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

export const selectorFilter = (state) => {
  return state.filters.name;
};
