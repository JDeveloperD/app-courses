import CartTypes from './types';

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartTypes.UPDATE_CART:
      return payload;
    default:
      return state;
  }
};

export default cartReducer;
