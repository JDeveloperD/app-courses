import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {}
  };
};

const CoursesOffersPage: NextPage = () => {
  return (
    <div></div>
  );
};

CoursesOffersPage.layout = 'store';

export default CoursesOffersPage;
