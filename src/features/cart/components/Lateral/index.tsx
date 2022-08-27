import { FC } from 'react';
import { Button, HeadLine, Paragraph, Small } from '@features/ui';
import { useCartContext } from '@features/cart';
import { Course } from '@features/course';
import { formatCurrency } from '@utils/formatCurrency';
import CartItem from '../CartItem';
import {
  Wrapper,
  List,
  Foot,
  ButtonClose,
  Overlay,
  Container
} from './cartLateral.styled.';

type CartLateralProps = {
  closeFunction: () => void,
  active: boolean
}

const CartLateral: FC<CartLateralProps> = ({ closeFunction, active }) => {
  const [{ itemsOnCart, total }] = useCartContext();

  return (
    <Wrapper active={active}>
      <Overlay />
      <Container>
        <ButtonClose onClick={closeFunction} className='ms-auto'>&times;</ButtonClose>
        <HeadLine size={4}>Tu carrito de compras</HeadLine>
        <Paragraph color='gray'>Tienes {itemsOnCart?.length} curso en tu carrito</Paragraph>
        <Small>
          Total: <HeadLine as="b" size={6} color="primary">{formatCurrency(parseFloat(total))} </HeadLine>
        </Small>
        <List>
          {itemsOnCart?.map((course: Course) => (
            <li key={course.id}>
              <CartItem {...course} />
            </li>
          ))}
        </List>
        <Foot>
          <Button className='w-100' color='primary' variant='outlined'>Ir a mi carrito</Button>
          <Button className='w-100' color='primary' variant='filled'>Comprar ahora</Button>
        </Foot>
      </Container>
    </Wrapper>
  );
};

export default CartLateral;
