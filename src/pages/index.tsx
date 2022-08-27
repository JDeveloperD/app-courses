import { InstructorSectionHome } from '@features/instructor';
import { AgroClubWhySection, AgroClubBannerMain, AgroClubBannerAppMobile } from '@features/agro-club';
import { CourseSectionCarousel } from '@features/course';
import { GetServerSideProps } from 'next';
import { getCourses } from '@api/course';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { data } = await getCourses();

  return {
    props: {
      courses: data
    }
  };
};

const Home = ({ courses }) => {
  return (
    <>
      <AgroClubBannerMain />
      <AgroClubWhySection />
      <CourseSectionCarousel courses={courses} />
      <InstructorSectionHome />
      <AgroClubBannerAppMobile />
    </>
  );
};

export default Home;
