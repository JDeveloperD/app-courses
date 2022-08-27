import {
  Wrapper,
  Group,
  ItemParent,
  SubItemParent,
  List
} from './filterCategories.styled';
import {
  Checkbox,
  Small,
  BsChevronDown,
  AiOutlinePlus
} from '@features/ui';

const FilterCategories = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <Group open>
        <ItemParent>
          Categorias <BsChevronDown />
        </ItemParent>
        <details open>
          <SubItemParent>
            <AiOutlinePlus />
            Estructura agraria
          </SubItemParent>
          <List>
            <li>
              <label htmlFor="item1-1">
                <Checkbox
                  type="radio"
                  id='item1-1'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Todos</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-2">
                <Checkbox
                  type="radio"
                  id='item1-2'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Sub categoria</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-3">
                <Checkbox
                  type="radio"
                  id='item1-3'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Sub categoria</Small>
              </label>
            </li>
          </List>
        </details>
        <details open>
          <SubItemParent>
            <AiOutlinePlus />
            Expancion agricola
          </SubItemParent>
        </details>
        <details open>
          <SubItemParent>
            <AiOutlinePlus />
            Analisis de agroecosistemas
          </SubItemParent>
        </details>
        <details open>
          <SubItemParent>
            <AiOutlinePlus />
            Agricultura industrial
          </SubItemParent>
        </details>
      </Group>
      <Group open>
        <ItemParent>
          Niveles <BsChevronDown />
        </ItemParent>
        <List>
            <li>
              <label htmlFor="item1-1">
                <Checkbox
                  type="radio"
                  id='item1-1'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Basico</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-2">
                <Checkbox
                  type="radio"
                  id='item1-2'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Intermedio</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-3">
                <Checkbox
                  type="radio"
                  id='item1-3'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Avanzado</Small>
              </label>
            </li>
          </List>
      </Group>
      <Group>
        <ItemParent>
          Duracion <BsChevronDown />
        </ItemParent>
      </Group>
    </Wrapper>
  );
};

export default FilterCategories;
