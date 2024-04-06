import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducer/cartReducer';
import restaurantReducer from '../reducer/restaurantReducer';
export const store = configureStore({
  reducer: {
    CartReducer: cartReducer,
    restaurant: restaurantReducer,
  },
});
