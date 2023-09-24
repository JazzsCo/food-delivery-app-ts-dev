import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../types";
import { RootState } from "../store";

interface InitialStateProps {
  items: Restaurant[];
}

const initialState: InitialStateProps = {
  items: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<any>) => {
      state.items = [action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectedRestaurant = (state: RootState) => state.restaurant.items;

export default restaurantSlice.reducer;
