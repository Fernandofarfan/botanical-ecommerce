import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import toastReducer from "./toastSlice";
import couponReducer from "./couponSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist", "coupon"],
};


const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  toast: toastReducer,
  coupon: couponReducer,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
