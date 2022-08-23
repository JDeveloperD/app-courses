import { createContext, useContext } from 'react';

export const CartContext = createContext<any | null>(null);

export const useCartContext = () => useContext(CartContext);
