import { SpecialistsSection } from '@features/specialist';
import { AgroClubWhySection, AgroClubBannerMain, AgroClubBannerAppMobile } from '@features/agro-club';
import { CourseCarouselSection } from '@features/course';
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
      <CourseCarouselSection courses={courses} />
      <SpecialistsSection />
      <AgroClubBannerAppMobile />
    </>
  );
};

export default Home;
