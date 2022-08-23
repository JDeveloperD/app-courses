import {
  HeadLine, Paragraph,
  BsCheck2,
  IoMdHappy,
  BsFiles,
  FiUsers,
  BsTrophy,
  AiOutlineEye,
  BsBarChartLine,
  BsBookmarksFill,
  Button
} from '@features/ui';
import {
  Wrapper,
  Head,
  List,
  Item
} from './featuresOfCourse.styled';
import { Level } from '@features/course';
import Link from 'next/link';
import { formatCurrency } from '@utils/formatCurrency';

const FeaturesOfCourse = () => {
  return (
    <Wrapper>
      <Link href='/' passHref>
        <Button
          as='a'
          color='secondary'
          variant='filled'
          block
          className='mb-4 py-3'
          >
          <BsBookmarksFill />
          Obtener una membresía
        </Button>
      </Link>

      <Head>
        <Paragraph className='mb-0'>Tomar el curso completo</Paragraph>
        <HeadLine className='mb-0' size={3}>{formatCurrency(149)}</HeadLine>
      </Head>
      <List>
        <Item> <BsCheck2 /> Calidad comprobada por UNI</Item>
        <Item> <IoMdHappy /> Online y a tu ritmo</Item>
        <Item> <BsFiles /> 11 Recursos adicionales</Item>
        <Item> <FiUsers /> 2999 alumnos</Item>
        <Item> <BsTrophy /> Certificado al completar el curso</Item>
        <Item> <AiOutlineEye /> Acceso ilimitado</Item>
        <Item> <BsBarChartLine /> Nivel <Level level={3} /> </Item>
      </List>

    </Wrapper>
  );
};

export default FeaturesOfCourse;
