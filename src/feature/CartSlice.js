import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      return [...state, ...action.payload];
    },
    deleteFromCart: (state, action) => {
      return state.filter((state) => action.payload !== state.id);
    },
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    increaseQuantity: (state, action) => {
      return state.map((laptop) =>
        laptop.id == action.payload
          ? { ...laptop, quantity: laptop.quantity + 1 }
          : laptop
      );
    },
    decreaseQuantity: (state, action) => {
      return state.map((laptop) =>
        laptop.id == action.payload
          ? { ...laptop, quantity: laptop.quantity - 1 }
          : laptop
      );
    },
  },
});

export const {
  increaseQuantity,
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  setCartFromLocalStorage,
} = CartSlice.actions;

export default CartSlice.reducer;
