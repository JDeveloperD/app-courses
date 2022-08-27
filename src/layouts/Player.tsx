import { FC, ReactNode } from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { CartProvider } from '@features/cart';
import { CourseProvider } from '@features/course';
import { MainPublic } from './layouts.styled';

type LayoutPlayerProps = {
  children: ReactNode
}

const PAGE_TRANSITION = {
  duration: 0.5,
  ease: [0.83, 0, 0.17, 1]
};

const animations = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.duration,
      ease: PAGE_TRANSITION.ease
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION.duration,
      delay: PAGE_TRANSITION.duration,
      ease: PAGE_TRANSITION.ease
    }
  }
};

const LayoutPlayer:FC<LayoutPlayerProps> = ({ children }) => {
  return (
    <CourseProvider>
      <CartProvider>
        <LazyMotion features={domAnimation}>
          <m.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
          >
            <MainPublic isLight={true}>
              {children}
            </MainPublic>
          </m.div>
        </LazyMotion>
      </CartProvider>
    </CourseProvider>
  );
};

export default LayoutPlayer;
