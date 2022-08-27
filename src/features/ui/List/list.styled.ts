import { RESET_UL } from '@styles';
import styled, { css } from 'styled-components';

const Item = styled.li<{active?: boolean}>`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textBody};
  }

  &::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 24px;
    background-color: transparent;
  }
  
  ${({ theme, active }) => active && css`
    color: ${theme.colors.primary};
    
    &::before {
      background-color: ${theme.colors.primary};
    }

    a {
      color: ${theme.colors.primary};
      font-weight: 600;
    }
  `}
`;

const Wrapper = styled.ul`
  ${RESET_UL}
`;

export default {
  Wrapper,
  Item
};
