import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Figure = styled.figure`
  position: relative;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
`;

const Info = styled.figcaption`
  z-index: 3;
  position: absolute;
  bottom: 3rem;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 0.4rem 1.3rem;
`;

const Position = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  position: absolute;
  left: 2rem;
  white-space: nowrap;
`;

export default {
  Wrapper,
  Figure,
  Info,
  Position
};
