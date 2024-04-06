import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'CartReducer',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action?.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        item => item._id === action.payload?.id,
      );

      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Cant't remove the item that is not in cart");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, emptyCart} = CartSlice.actions;
export const selectedCartItems = state => state.CartReducer.items;
export const selectCartItemsById = (state, id) =>
  state.CartReducer.items.filter(item => item._id == id);
export const selectCartTotal = state =>
  state.CartReducer.items.reduce((total, item) => total + item.price, 0);
export default CartSlice.reducer;
