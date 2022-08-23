import {
  AiOutlineStar,
  LineDividerText,
  Paragraph,
  Small,
  List
} from '@features/ui';
import FilterCategories from './FilterCategories';

const FilterAside = () => {
  return (
    <aside>
      <List items={[]} />
      <LineDividerText color='light' className='mb-4' />
      <Paragraph>Cursos Online <AiOutlineStar /> </Paragraph>
      <LineDividerText color='light' className='my-4' />
      <Small color='gray'>FILTRAR RESULTADOS</Small>
      <FilterCategories className='mt-4' />
    </aside>
  );
};

export default FilterAside;
