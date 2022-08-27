import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {}
  };
};

const NewCoursesPage: NextPage = () => {
  return (
    <div></div>
  );
};

NewCoursesPage.layout = 'store';

export default NewCoursesPage;
