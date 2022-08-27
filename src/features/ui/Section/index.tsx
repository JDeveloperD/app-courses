import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles/constants';

const Section = styled.section<{topSection?: boolean}>`
  padding: 2rem 0;

  ${({ theme, color }) => color && css`
    background: ${theme.colors[color]};
  `}

  ${({ topSection }) => topSection && css`
    padding-top: 160px;
  `}

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 3rem 0;

    ${({ topSection }) => topSection && css`
      padding-top: 160px;
    `}
  }
  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 4rem 0;

    ${({ topSection }) => topSection && css`
      padding-top: 200px;
    `}
  }
`;

export default Section;
