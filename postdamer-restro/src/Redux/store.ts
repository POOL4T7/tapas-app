import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu/slice';
import categoryReducer from './category/categorySlice'
import product from './product/productSlice'

const store = configureStore({
  reducer: {
    menu: menuReducer,
    category: categoryReducer,
    product:product

  },
});

// Export types for use in components
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;