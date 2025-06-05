import { configureStore } from "@reduxjs/toolkit";
import booksApi from './features/books/booksApi'
import ordersApi from './features/orders/ordersApi'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, 
        ordersApi.middleware
    ),
})