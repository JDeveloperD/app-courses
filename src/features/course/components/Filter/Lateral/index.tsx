import {
  AiOutlineStar,
  LineDividerText,
  Paragraph,
  Small,
  List
} from '@features/ui';
import FilterCategories from '../Categories';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { COLORS } from '@styles';
import { routesPage } from '@routes';

const CourseFilterLateral = () => {
  const { pathname } = useRouter();

  const itemLink = [
    {
      id: 'item-link-1',
      title: 'Cursos online',
      path: routesPage.courses.online,
      active: pathname === routesPage.courses.online
    },
    {
      id: 'item-link-2',
      title: 'Cursos nuevos',
      path: routesPage.courses.new,
      active: pathname === routesPage.courses.new
    },
    {
      id: 'item-link-3',
      title: 'Cursos gratis',
      path: routesPage.courses.free,
      active: pathname === routesPage.courses.free
    },
    {
      id: 'item-link-4',
      title: 'Cursos en oferta',
      path: routesPage.courses.offer,
      active: pathname === routesPage.courses.offer
    }
  ];
  return (
    <aside>
      <List items={itemLink} />
      <LineDividerText color='light' className='mb-4' />
      <Paragraph>
        <Link href='/'>
          <a className='d-flex align-items-center text-decoration-none gap-3'>
            Hazte Premium <AiOutlineStar color={COLORS.yellow} />
          </a>
        </Link>
      </Paragraph>
      <LineDividerText color='light' className='my-4' />
      <Small color='gray'>FILTRAR RESULTADOS</Small>
      <FilterCategories className='mt-4' />
    </aside>
  );
};

export default CourseFilterLateral;
