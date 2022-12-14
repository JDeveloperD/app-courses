import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getSession(context);
  // validar session
  if (session === null) {
    // redireccionar
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
};

const PanelPage = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return null;
  }

  if (status === 'unauthenticated') {
    return <>Acceso denegado</>;
  }

  return (
    <>
      Contenido solo a miembros logeados
    </>
  );
};

export default PanelPage;
