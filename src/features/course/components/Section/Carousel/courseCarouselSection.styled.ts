import { Section } from '@features/ui';
import { GRAY_SCALE } from '@styles';
import styled from 'styled-components';

const Wrapper = styled(Section)`
  background: ${GRAY_SCALE[1000]};
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 50%;
    height: 600px;
    background-image: url('/img/image2.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export {
  Wrapper
};
