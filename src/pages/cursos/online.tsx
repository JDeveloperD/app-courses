import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {}
  };
};

const OnlineCoursesPage: NextPage = () => {
  return (
    <div>
      cursos en oferta
    </div>
  );
};

OnlineCoursesPage.layout = 'store';

export default OnlineCoursesPage;
