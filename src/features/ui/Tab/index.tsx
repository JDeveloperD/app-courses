import { MEDIA_BREAKPOINTS, RESET_BUTTON } from '@styles';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const Button = styled.button<{active?: boolean}>`
  ${RESET_BUTTON}
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  ${({ active, theme }) => active && css`
    color: ${theme.colors.primary};
    background: ${lighten(0.6, theme.colors.primary)};
  `}
`;

const Head = styled.div`
  margin-bottom: 1rem;

  ${MEDIA_BREAKPOINTS.laptop} {
    margin-bottom: 1.5rem;
  }
`;

const Content = styled.div`
`;

const Body = styled.div``;

const Wrapper = styled.div``;

export default {
  Wrapper,
  Head,
  Body,
  Button,
  Content
};
