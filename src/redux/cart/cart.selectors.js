import { createSelector } from 'reselect';

// input selectors = doesn't use createSelector
// output selectors = does use input selectors and createSelector

const selectCart = state => state.cart; // passed the complete state from combine reducer

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);