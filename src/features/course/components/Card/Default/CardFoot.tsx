import { ButtonAddToCart, useCartContext } from '@features/cart';
import { Button } from '@features/ui';
import { Course } from '@features/course/domain';
import { FC, useEffect, useState } from 'react';
import CardCourseStyled from './cardcourse.styled';

const CardFoot: FC<{id: number}> = ({ id }) => {
  const [isCourseInCart, setIsCourseInCart] = useState<boolean>(false);
  const [{ itemsOnCart }] = useCartContext();

  useEffect(() => {
    const verifyCourseInCart = itemsOnCart
      .find((course: Course) => course.id === id);

    setIsCourseInCart(!!verifyCourseInCart);
  }, [itemsOnCart]);

  return (
    <CardCourseStyled.Foot>
      <ButtonAddToCart
        id={id}
        isItemInCart={isCourseInCart}
      />
      <Button
        variant='filled'
        className='w-100'
        color='primary'
      >
        Obtener Membresía
      </Button>
    </CardCourseStyled.Foot>
  );
};

export default CardFoot;
