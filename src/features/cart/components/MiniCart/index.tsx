import { Button, HeadLine, Paragraph, Small } from '@features/ui';
import CartItem from '../CartItem';
import CartStyled from './minicart.styled';
import { useCartContext } from '@features/cart';
import { formatCurrency } from '@utils/formatCurrency';

const MiniCart = ({ closeFunction, active }: {closeFunction: () => void, active: boolean}) => {
  const [{ itemsOnCart, total }] = useCartContext();

  return (
    <CartStyled.Wrapper active={active}>
      <CartStyled.Overlay />
      <CartStyled.Container>
        <CartStyled.ButtonClose onClick={closeFunction} className='ms-auto'>&times;</CartStyled.ButtonClose>
        <HeadLine size={4}>Tu carrito de compras</HeadLine>
        <Paragraph color='gray'>Tienes {itemsOnCart?.length} curso en tu carrito</Paragraph>
        <Small>
          Total: <HeadLine as="b" size={6} color="primary">{formatCurrency(parseFloat(total))} </HeadLine>
        </Small>
        <CartStyled.List>
          {itemsOnCart?.map(course => (
            <li key={course.id}>
              <CartItem {...course} />
            </li>
          ))}
        </CartStyled.List>
        <CartStyled.Foot>
          <Button className='w-100' color='primary' variant='outlined'>Ir a mi carrito</Button>
          <Button className='w-100' color='primary' variant='filled'>Comprar ahora</Button>
        </CartStyled.Foot>
      </CartStyled.Container>
    </CartStyled.Wrapper>
  );
};

export default MiniCart;
