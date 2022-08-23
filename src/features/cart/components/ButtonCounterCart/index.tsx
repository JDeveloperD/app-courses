import { useCartContext } from '@features/cart/context';
import {
  Badge,
  Button,
  AiOutlineShoppingCart
} from '@features/ui';
import { FC } from 'react';

const ButtonCounterCart: FC<{light: boolean, openMiniCart: any}> = ({ light, openMiniCart }) => {
  const [{ itemsOnCart }] = useCartContext();
  return (
    <Button
      color={light ? 'light' : undefined}
      className='ms-2'
      variant='icon'
      onClick={openMiniCart}
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

export default ButtonCounterCart;
