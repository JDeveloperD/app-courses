import { TRANSITIONS } from '@styles';
import styled from 'styled-components';

const Description = styled.div`
  width: 100%;
  padding: 40% 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.8) 19.05%, rgba(0, 0, 0, 0) 100%);
`;

const Wrapper = styled.a<{backgroundImage: string}>`
  display: block;
  text-decoration: none;
  position: relative;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  overflow: hidden;
  transition: ${TRANSITIONS.base};

  & > span {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
  }

  &::after {
    content: 'Ver el curso';
    display: block;
    background: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transition: ${TRANSITIONS.base};
  }

  &:hover {
    transform: scale(1.02);

    /* ${Description} {
      display: none;
    }

    &::after {
      opacity: 1;
    } */
  }
`;

export default {
  Wrapper,
  Description
};
