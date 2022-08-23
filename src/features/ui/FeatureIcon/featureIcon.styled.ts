import { TRANSITIONS } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  border-radius: 1rem;
  transition: ${TRANSITIONS.base};
  padding: 2rem 1rem;

  &:hover {
    background: black;
  }
`;

export default {
  Wrapper
};
