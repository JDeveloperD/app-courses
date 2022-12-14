import {
  Button,
  LineDividerText,
  FiBriefcase,
  FiGift,
  FiChevronDown,
  HeadLine, Paragraph,
  FaRegComments,
  VscSignOut
} from '@features/ui';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import signInInfoStyled from './signInInfo.styled';
import { CourseProgressShort } from '@features/course';
import { FC } from 'react';
import Link from 'next/link';
import { routesPage } from '@routes';

export type SignInInfoProps = {
  light: boolean
}

const SignInInfo: FC<SignInInfoProps> = ({ light, ...props }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return null;
  }

  if (!session) {
    return (
      <>
        <Link href={routesPage.auth.signIn} passHref>
          <Button
            as="a"
            variant="outlined"
            className='d-none d-xl-inline-block ms-2'
            color={light ? 'light' : 'primary'}>
            Iniciar sesión
          </Button>
        </Link>
        <Link href={routesPage.auth.register} passHref>
          <Button
            as="a"
            className='d-none d-xl-inline-block ms-2'
            variant='filled'
            color={light ? 'light' : 'secondary'}>
            Registrarte
          </Button>
        </Link>
      </>
    );
  }

  return (
    <signInInfoStyled.AccountDetails open={false}>
    <summary>
      <signInInfoStyled.Avatar>
        <Image
          src={session.user?.image ? session.user.image : '/img/default-avatar.jpg'}
          width={25}
          height={25}
          quality={100}
        />
      </signInInfoStyled.Avatar>
      <FiChevronDown />
    </summary>
    <signInInfoStyled.Account>
      <header className='p-2'>
        <CourseProgressShort />
      </header>
      <main className='p-2'>
        <Button
          bold
          onClick={() => router.push('/cuenta')}
          color='secondary'
          className='ps-0'
        >
          Ver todos mis cursos
        </Button>
        <LineDividerText color='textBody' className='mb-3' />
        <HeadLine color='light' size={6} className='mb-0'>Hola, {session.user?.name}!</HeadLine>
        <Paragraph color='gray'>Agroclub Basic</Paragraph>

        <Link href={routesPage.user.account} passHref>
          <Button
            bold
            color='secondary'
            className='ps-0'
          >
            Ver mi cuenta
          </Button>
        </Link>

        <LineDividerText className='mb-3' color='textBody' />
        <Paragraph color='gray'> <FiBriefcase /> <span className="ms-3">Empleos</span></Paragraph>
        <Paragraph color='gray'> <FiGift /> <span className="ms-3">Obten 1 mes gratis</span></Paragraph>
        <Paragraph color='gray'> <FiBriefcase /> <span className="ms-3">Mi suscripcion</span></Paragraph>
        <Paragraph color='gray'> <FaRegComments /> <span className="ms-3">Contacanos</span></Paragraph>
      </main>
      <footer className='mt-3'>
        <Button
          bold
          onClick={() => signOut()}
          color='secondary'
          className='ps-0'
        >
          Cerrar sesión <VscSignOut />
        </Button>
      </footer>
    </signInInfoStyled.Account>
  </signInInfoStyled.AccountDetails>
  );
};

export default SignInInfo;
