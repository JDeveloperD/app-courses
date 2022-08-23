import { Container as BsContainer } from 'react-bootstrap';

const Container = ({ children, ...props }) => {
  return (
    <BsContainer fluid="xxl" {...props}>
      {children}
    </BsContainer>
  );
};

export default Container;
