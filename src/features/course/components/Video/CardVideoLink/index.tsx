import { Course, Level } from '@features/course';
import { HeadLine, Small, AiOutlineUser, FiThumbsUp } from '@features/ui';
import Link from 'next/link';
import { FC } from 'react';
import CardVideoLinkStyled from './cardVideoLink.styled';

const CardVideoLink: FC<Course> = ({
  slug,
  level,
  name,
  totalStudents,
  video
}) => {
  return (
    <Link href={`/cursos/${slug}`} passHref>
      <CardVideoLinkStyled.Wrapper backgroundImage={video.thumb}>
        <Level level={level} />

        <CardVideoLinkStyled.Description>
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
        </CardVideoLinkStyled.Description>
      </CardVideoLinkStyled.Wrapper>
    </Link>
  );
};

export default CardVideoLink;
