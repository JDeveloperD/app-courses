import { getCourseById } from '@api/course';
import { Course, CourseDetailTab, CourseFeaturesList } from '@features/course';
import { Col, Container, HeadLine, Paragraph, Row, Section } from '@features/ui';
import { getIdFromSlug } from '@utils/generateSlug';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;

  const courseId = getIdFromSlug(slug);

  const course = await getCourseById(courseId);

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

const SingleCoursePage = ({ course }: {course: Course}) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col lg={8}>
            <HeadLine size={2}>{course.name}</HeadLine>
            <Paragraph>Un curso de <b>{course.instructor.name}</b></Paragraph>
            <CourseDetailTab />
          </Col>
          <Col lg={4}>
            <CourseFeaturesList />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SingleCoursePage;
