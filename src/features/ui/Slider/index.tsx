import React, { FC } from 'react';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderStyled from './slider.styled';

interface SliderProps {
  items: any[]
  render: any,
  className?: string,

}

const Slider: FC<SliderProps> = ({ items, render, className, ...props }) => {
  return (
    <SliderStyled.Wrapper className={className}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        {...props}
      >
        {items.map(render)}
      </Swiper>
    </SliderStyled.Wrapper>
  );
};

export default Slider;
