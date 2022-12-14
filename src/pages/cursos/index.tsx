import { GetServerSideProps, NextPage } from 'next';
import {
  Col,
  Container,
  Row,
  Section
} from '@features/ui';
import {
  CourseFilterLateral,
  CourseGridDefault,
  CourseTypes,
  useCourseContext
} from '@features/course';
import { AgroClubBannerCourseSlider } from '@features/agro-club';
import { getCourses } from '@api/course';
import { useEffect } from 'react';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { data } = await getCourses();

  return {
    props: {
      courses: data
    }
  };
};

const CoursesPage = ({ courses }: {courses: any[]}) => {
  const [, dispatchCourse] = useCourseContext();

  useEffect(() => {
    if (courses.length > 0) {
      dispatchCourse({ type: CourseTypes.ADD_COURSES, payload: courses });
    }
  }, [courses]);

  return (
    <>
      <Container>
        <AgroClubBannerCourseSlider />
      </Container>
      <Section>
        <Container>
          <Row>
            <Col lg={3}>
              <CourseFilterLateral />
            </Col>
            <Col lg={9}>
              <CourseGridDefault
                courses={courses}
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default CoursesPage;
