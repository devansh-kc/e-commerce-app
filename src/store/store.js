import { configureStore } from "@reduxjs/toolkit";
import { setCartFromLocalStorage } from "../feature/CartSlice";

import CartSlice from "../feature/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("Cart", JSON.stringify(state.cart));
});

const loadCartDataFromStorage = () => {
  const storedCart = localStorage.getItem("Cart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    store.dispatch(setCartFromLocalStorage(parsedCart));
  }
};

loadCartDataFromStorage();
