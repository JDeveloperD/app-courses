import { CourseCardShort, Course } from '@features/course';
import { MarkSection, Button, BsArrowRight, Slider } from '@features/ui';
import { GRID_BREAKPOINTS } from '@styles';
import { SwiperSlide } from 'swiper/react';
import { Wrapper } from './courseSectionCarousel.styled';
import Link from 'next/link';
import { FC } from 'react';

type CourseSectionCarouselProps = {
  courses: Course[]
}

const CourseSectionCarousel: FC<CourseSectionCarouselProps> = ({ courses }) => {
  return (
    <Wrapper>
      <MarkSection>Cursos</MarkSection>
      <Slider
        className='my-5'
        items={courses}
        speed={5000}
        autoplay={{ delay: 0 }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          [GRID_BREAKPOINTS.md]: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          [GRID_BREAKPOINTS.lg]: {
            slidesPerView: 3.5,
            spaceBetween: 40
          }
        }}
        render={(course: any, index: number) => (
          <SwiperSlide key={index}>
            <CourseCardShort {...course}/>
          </SwiperSlide>
        )}
      />

      <Slider
        className='my-5'
        items={courses}
        speed={5000}
        autoplay={{ delay: 0, reverseDirection: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          [GRID_BREAKPOINTS.md]: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          [GRID_BREAKPOINTS.lg]: {
            slidesPerView: 3.5,
            spaceBetween: 40
          }
        }}
        render={(course: any, index: number) => (
          <SwiperSlide key={index}>
            <CourseCardShort {...course}/>
          </SwiperSlide>
        )}
      />

      <div className="text-center">
        <Link href='/cursos' passHref>
          <Button
            color='secondary'
            variant='outlined'>
            Ver Cursos <BsArrowRight />
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default CourseSectionCarousel;
