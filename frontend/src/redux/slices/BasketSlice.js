import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
  },
  reducers: {
    addBasket: (state, action) => {
      let isExist = state.basket.find((item) => item._id == action.payload._id);
      if (isExist) {
        isExist.count += 1;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decBasket: (state, action) => {
      let isExist = state.basket.find((item) => item._id == action.payload._id);
      if (isExist.count > 1) {
        isExist.count--;
      } else {
        state.basket = state.basket.filter((item) => item._id != isExist._id);
      }
    },
    incBasket: (state, action) => {
      let isExist = state.basket.find((item) => item._id == action.payload._id);
      isExist.count++;
    },
    removeFromBasket: (state, action) => {
      let isExist = state.basket.find((item) => item._id == action.payload._id);
      let filteredBasket = state.basket.filter(
        (item) => item._id != isExist._id
      );
      state.basket = filteredBasket;
    },
  },
});

export const { addBasket, decBasket, incBasket, removeFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
