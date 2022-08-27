import {
  Badge,
  Button,
  AiOutlineShoppingCart
} from '@features/ui';
import { useCartContext } from '@features/cart/context';
import { FC } from 'react';

type CartButtonCounterProps = {
  light: boolean,
  openMiniCart: any
}

const CartButtonCounter: FC<CartButtonCounterProps> = ({ light, openMiniCart, ...props }) => {
  const [{ itemsOnCart }] = useCartContext();
  return (
    <Button
      color={light ? 'light' : undefined}
      className='ms-2'
      variant='icon'
      onClick={openMiniCart}
      {...props}
    >
      <AiOutlineShoppingCart />
      <Badge
        position='top-right'
        color='primary'
        shape='rounded'
      >{itemsOnCart?.length}</Badge>
    </Button>
  );
};

export default CartButtonCounter;
