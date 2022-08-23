import {
  HeadLine,
  Paragraph,
  Small,
  Button,
  AiOutlineUser,
  IoIosTimer,
  Spiner,
  Player
} from '@features/ui';
import { formatCurrency } from '@utils/formatCurrency';
import { formatTime } from '@utils/formatTime';
import { useEffect, useState } from 'react';
import { Level, Course, useCourseContext } from '@features/course';
import PreviewStyled from './preview.styled';

const VideoPreview = ({ id }: {id:number}) => {
  const [{ initialCourses }] = useCourseContext();
  const [course, setCourse] = useState<Course|undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      const courseFound = initialCourses.find((course: Course) => course.id === id);
      console.log(courseFound);
      setCourse(courseFound);
    }, 800);
  }, []);

  if (course === undefined) {
    return (
      <div className='d-flex m-5 align-items-center justify-content-center'>
        <Spiner color='primary' />
      </div>
    );
  }

  return (
    <PreviewStyled.Wrapper>
      <PreviewStyled.Video>
        <Player
          thumb={course.video.thumb}
          src={course.video.src}
        />
      </PreviewStyled.Video>
      <div className='p-3 p-md-4'>
        <HeadLine size={5}>{course.name}</HeadLine>
        <Small color='gray'>Por {course.instructor.name}</Small>
        <div className='d-flex gap-3'>
          <Paragraph as='span' color='primary'>
            <IoIosTimer />
            {formatTime(course.duration)}
          </Paragraph>

          <Paragraph as='span' color='primary'>
            <AiOutlineUser />
            {course.totalStudents}
          </Paragraph>

          <Paragraph color='primary'>
            <Level level={course.level} />
          </Paragraph>
        </div>
        <Paragraph color='gray' className='d-none d-md-block'>{course.excerpt}</Paragraph>
        <div className="text-end">
          <span className='d-inline-flex gap-2 align-items-center me-4'>
            {course.discount?.amount
              ? (
              <HeadLine color='danger' as="span" size={2} className="mb-0">
                {formatCurrency(course.discount.amount)}
              </HeadLine>
                )
              : null}
            <HeadLine size={5} color='gray' as="del">
              {formatCurrency(course.price.amount)}
            </HeadLine>
          </span>
          <Button variant='filled' color='secondary'>Comprar ahora</Button>
        </div>
      </div>
    </PreviewStyled.Wrapper>
  );
};

export default VideoPreview;
