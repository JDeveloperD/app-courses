import { FC } from 'react';
import { Button, HeadLine, Small, GrTrash } from '@features/ui';
import Image from 'next/image';
import CartItemStyled from './cartItem.styled';
import { CartService } from '@features/cart/services/CartService';
import { CartTypes, useCartContext } from '@features/cart/context';
import { useCourseContext, Course } from '@features/course';
import { formatCurrency } from '@utils/formatCurrency';

type CartItemProps = Omit<Course, 'level'>

const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  instructor,
  discount,
  video
}) => {
  const [cartState, dispatchCart] = useCartContext();
  const [{ initialCourses }] = useCourseContext();

  const cartService = new CartService(cartState, initialCourses);

  const handleRemove = () => {
    const itemRemoved = cartService.removeToCart(id);
    dispatchCart({ type: CartTypes.UPDATE_CART, payload: itemRemoved });
  };

  return (
    <CartItemStyled.Wrapper>
      <CartItemStyled.Figure>
        <Image
          src={video.thumb}
          layout="fill"
          objectFit='cover'
        />
      </CartItemStyled.Figure>
      <CartItemStyled.Info>
        <HeadLine size={6} color="textBody" className="mb-0">{name}</HeadLine>
        <Small color="gray">{instructor.name}</Small>

        <div className='d-flex gap-2'>
          {discount && (
            <>
              <HeadLine color='danger' size={6} className="mb-0">
                {formatCurrency(discount.amount)}
              </HeadLine>
              <Small color='gray' as="del">
                {formatCurrency(price.amount)}
              </Small>
            </>
          )}

          {!discount && (
            <HeadLine size={6}>
              {formatCurrency(price.amount)}
            </HeadLine>
          )}
        </div>
      </CartItemStyled.Info>
      <Button
        variant="icon"
        onClick={handleRemove}
      >
        <GrTrash />
      </Button>
    </CartItemStyled.Wrapper>
  );
};

export default CartItem;
