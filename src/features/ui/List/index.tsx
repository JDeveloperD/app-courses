import ListStyled from './list.styled';
import { FC } from 'react';
import Link from 'next/link';

type ListProps = {
  items: Array<{
    id: string,
    title: string,
    path: string,
    active: boolean
  }>
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ListStyled.Wrapper>
      {items.map(item => (
        <ListStyled.Item key={item.id} active={item.active}>
          <Link href={item.path} >
            <a>{item.title}</a>
          </Link>
        </ListStyled.Item>
      ))}
    </ListStyled.Wrapper>
  );
};

export default List;
