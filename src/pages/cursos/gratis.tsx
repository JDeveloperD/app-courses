import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {}
  };
};

const FreeCoursesPage: NextPage = () => {
  return (
    <div></div>
  );
};

FreeCoursesPage.layout = 'store';

export default FreeCoursesPage;
