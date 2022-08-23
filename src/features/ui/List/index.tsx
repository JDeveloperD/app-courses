import ListStyled from './list.styled';

const List = ({ items }: {items: string[]}) => {
  return (
    <ListStyled.Wrapper>
      <ListStyled.Item>
        Cursos Online
      </ListStyled.Item>
      <ListStyled.Item active>
        Cursos en Oferta
      </ListStyled.Item>
      <ListStyled.Item>
        Cursos Nuevos
      </ListStyled.Item>
    </ListStyled.Wrapper>
  );
};

export default List;
