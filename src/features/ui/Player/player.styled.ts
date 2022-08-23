import { GRAY_SCALE, TRANSITIONS, zerosIndex } from '@styles';
import styled from 'styled-components';

const ControlRange = styled.input`
  width: calc(100% - 1.30rem);
  margin: 0 0.65rem;
  height: 4px;
  -webkit-appearance: none;
  background: ${GRAY_SCALE[900]};
  outline: none;
  overflow: hidden;
  cursor: pointer;
  transition: ${TRANSITIONS.base};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    cursor: e-resize;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: -407px 0 0 400px ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    height: 7px;
  }
`;

const ControlBar = styled.div`
  width: 100%;
  position: absolute;
  padding-bottom: 0.5rem;
  bottom: -100%;
  color: ${({ theme }) => theme.colors.light};
  opacity: 0;
  transition: ${TRANSITIONS.base};
`;

const Controlls = styled.div`
  ${zerosIndex({ zIndex: 3, position: 'absolute' })}
  background: linear-gradient(179.91deg, rgba(0, 0, 0, 0) 0.08%, #000000 86.42%);
`;

const Wrapper = styled.div<{thumb: string}>`
  width: 100%;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
  }

  &::after {
    content: '';
    display: block;
    background-image: url(${({ thumb }) => thumb});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${zerosIndex({ zIndex: 1, position: 'absolute' })}
  }

  &:hover {
    ${ControlBar} {
      bottom: 0;
      opacity: 1;
    }
  }
`;

export {
  Controlls,
  Wrapper,
  ControlBar,
  ControlRange
};
