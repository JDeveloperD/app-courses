import { ProgressBar, HeadLine, Small } from '@features/ui';
import Image from 'next/image';
import {
  Wrapper,
  Info,
  Progress,
  ImgCourse
} from './courseProgressShort.styled';

const CourseProgressShort = () => {
  return (
    <Wrapper>
      <Small bold color="light">Continua viendo</Small>
      <Info className='mt-2'>
        <ImgCourse>
          <Image src="/img/image1.jpg" objectFit='cover' layout='fill' />
        </ImgCourse>
        <Progress>
          <HeadLine size={6} color='light'>Curso Profesional de Next.js</HeadLine>
          <Small color='light'>80%</Small>
          <ProgressBar max='100' value='80' />
        </Progress>
      </Info>
    </Wrapper>
  );
};

export default CourseProgressShort;
