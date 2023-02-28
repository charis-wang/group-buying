import {
  FETCH_CART_ITEMS,
  ADD_CART_ITEM,
  UPDATE_CART_ITEMS,
} from "../actions/types";

const getCartItemKey = (payload) => payload.itemId + payload.orderDetail;

const genCartItem = (payload, additionalAmount = 0) => ({
  ...payload,
  id: getCartItemKey(payload),
  amount: payload.amount + additionalAmount,
});

export default function cartReducers(state = {}, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      const newState = {};
      for (let cartItem of action.payload) {
        const key = getCartItemKey(cartItem);
        newState[key] = genCartItem(cartItem);
      }

      return newState;

    case ADD_CART_ITEM:
      const key = getCartItemKey(action.payload);
      const additionalAmount = state[key] ? action.payload.amount : 0;

      return {
        ...state,
        [key]: genCartItem(state[key] || action.payload, additionalAmount),
      };

    case UPDATE_CART_ITEMS:
      return { ...action.payload };

    default:
      return state;
  }
}
