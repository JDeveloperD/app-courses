import { Section } from '@features/ui';
import { GRAY_SCALE, MEDIA_BREAKPOINTS } from '@styles';
import { rgba } from 'polished';
import styled from 'styled-components';

const Wrapper = styled(Section)`
  background: ${GRAY_SCALE[1000]};
`;

const Background = styled.div`
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  background: ${({ theme }) => rgba(theme.colors.primary, 0.3)};

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 2.5rem;
    padding-top: 3.5rem;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-image: url('/img/mobiles.png');
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default {
  Wrapper,
  Background
};
