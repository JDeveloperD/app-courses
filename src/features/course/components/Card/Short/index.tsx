import { FC } from 'react';
import Link from 'next/link';
import { Course, CourseLevel } from '@features/course';
import { HeadLine, Small, AiOutlineUser, FiThumbsUp } from '@features/ui';
import {
  Wrapper,
  Description
} from './cardShort.styled';
import { routesPage } from '@routes';

const CourseCardShort: FC<Course> = ({
  slug,
  level,
  name,
  totalStudents,
  video
}) => {
  const permalinkDetail = routesPage.courses.detail(slug);

  return (
    <Link href={permalinkDetail} passHref>
      <Wrapper backgroundImage={video.thumb}>
        <CourseLevel level={level} />

        <Description>
          <HeadLine size={6} color='light'>{name}</HeadLine>
          <div className='mt-3'>
            <Small color='light' className='d-inline-flex align-items-center gap-2'>
              <AiOutlineUser />
              {totalStudents} alumnos
            </Small>
            <Small color='light' className='d-inline-flex align-items-center gap-2 ms-4'>
              <FiThumbsUp />
              {(4 * 100) / 5}%
            </Small>
          </div>
        </Description>
      </Wrapper>
    </Link>
  );
};

export default CourseCardShort;
