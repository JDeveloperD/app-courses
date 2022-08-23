import { CartTypes, useCartContext } from '@features/cart/context';
import { CartService } from '@features/cart/services/CartService';
import { useCourseContext } from '@features/course';
import {
  Button,
  MdAddShoppingCart,
  BsCheck2
} from '@features/ui';
import { FC } from 'react';

type AddCartProps = {
  id: number;
  isItemInCart: boolean;
}

const ButtonAddToCart: FC<AddCartProps> = ({
  id,
  isItemInCart
}) => {
  const [cartState, dispatchCart] = useCartContext();
  const [{ initialCourses }] = useCourseContext();
  const cartService = new CartService(cartState, initialCourses);

  const handleClick = () => {
    let newCart;

    if (isItemInCart) {
      // remove item
      newCart = cartService.removeToCart(id);
    } else {
      // add item
      newCart = cartService.addToCart(id);
    }

    dispatchCart({ type: CartTypes.UPDATE_CART, payload: newCart });
  };

  return (
    <Button
      color={isItemInCart ? 'light' : 'primary'}
      variant={!isItemInCart ? 'outlined' : 'filled'}
      className='me-2'
      onClick={handleClick}
    >
      {isItemInCart ? <BsCheck2 size="1rem" /> : <MdAddShoppingCart />}
    </Button>
  );
};

export default ButtonAddToCart;
