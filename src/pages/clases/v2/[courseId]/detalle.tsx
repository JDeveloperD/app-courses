import { getCourseById } from '@api/course';
import { Course } from '@features/course';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { courseId } = context.params;

  const course = await getCourseById(Number(courseId));

  if (!course) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      course
    }
  };
};

const CourseDetail = ({ course }: {course: Course}) => {
  console.log(course);
  return (
    <div></div>
  );
};

export default CourseDetail;
