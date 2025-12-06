import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  cartItems: [],
  totalItemsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalItemsCount += 1;
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
        state.totalItemsCount += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItemsCount -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const item = state.cartItems.find(item => item.name === action.payload.name);
      if (item) {
        state.totalItemsCount -= item.quantity;
      }
      state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalItemsCount = 0;
    }
  },
});

const persistConfig = {
  key: 'cart',
  storage,
};

export const { addItemToCart, incrementQuantity, decrementQuantity, removeItemFromCart, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalItems = (state) => state.cart.totalItemsCount;
export const selectCartSubtotal = (state) =>
  state.cart.cartItems.reduce((total, item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);

export default persistReducer(persistConfig, cartSlice.reducer);
