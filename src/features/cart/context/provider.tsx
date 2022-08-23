import { FC, ReactNode, useReducer } from 'react';
import { CartContext } from './context';
import cartStateDefault from './state';
import cartReducer from './reducer';

const CartProvider:FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartStateDefault);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
