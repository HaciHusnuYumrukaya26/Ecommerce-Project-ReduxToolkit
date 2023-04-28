import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const IsItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (IsItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let temQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = temQty + item.price;
            return {
              ...item,
              quantity: temQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price*cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price*cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price*cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price*cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
