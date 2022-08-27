import { FC } from 'react';
import { Course } from '@features/course';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardFoot from './CardFoot';
import CardCourseStyled from './courseCardDefault.styled';
import { routesPage } from '@routes';

type CardCourseProps = Course & {
  handleVideoPreview: any
}

const CardCourse: FC<CardCourseProps> = ({
  id,
  slug,
  name,
  price,
  discount,
  instructor,
  level,
  video,
  rating,
  totalStudents,
  handleVideoPreview
}) => {
  // const permalinkDetail = `/clases/v2/${id}/detalle`;
  // const permalinkDetail = `/cursos/${slug}`;
  const permalinkDetail = routesPage.courses.detail(slug);

  return (
    <CardCourseStyled.Wrapper>

      <CardHead
        image={video.thumb}
        level={level}
        onClick={handleVideoPreview}
      />

      <CardBody
        permalink={permalinkDetail}
        nameCourse={name}
        instructorName={instructor.name}
        price={price}
        discount={discount}
        rating={rating}
        totalStudents={totalStudents}
      />

      <CardFoot id={id} />
    </CardCourseStyled.Wrapper>
  );
};

export default CardCourse;
