import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Dish } from "../types";

interface InitialStateProps {
  items: Dish[];
}

const initialState: InitialStateProps = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeToCart: (state, action: PayloadAction<Dish>) => {
      const removeItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (removeItem >= 0) {
        state.items.splice(removeItem, 1);
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export const selectedCartItems = (state: RootState) => state.cart.items;

export const selectedCartItemsById = (state: RootState, id: PayloadAction) =>
  state.cart.items.filter((item) => item.id === Number(id));

export const selectedCartItemsPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => (total += item.price), 0);

export default cartSlice.reducer;
