import { ButtonPlay, FiPlay } from '@features/ui';
import CardCourseStyled from './cardcourse.styled';
import { FC } from 'react';
import { Level } from '@features/course';

const CardHead: FC<{ image: string, level: number }> = ({ image, level, ...props }) => {
  return (
    <CardCourseStyled.Head {...props}>
      {/**
     * https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2
    */}
      <CardCourseStyled.Image image={image} />
      <CardCourseStyled.Level>
        <Level level={level} />
      </CardCourseStyled.Level>
      <ButtonPlay position='center' />
      <CardCourseStyled.Overlay>
        <FiPlay /> Ver el trailer
      </CardCourseStyled.Overlay>
    </CardCourseStyled.Head>
  );
};

export default CardHead;
