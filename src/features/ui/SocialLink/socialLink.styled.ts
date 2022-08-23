import { RESET_UL } from '@styles';
import { rgba } from 'polished';
import styled from 'styled-components';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => rgba(theme.colors.light, 0.1)};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
`;

const Item = styled.li``;

const Wrapper = styled.ul`
  ${RESET_UL}
  display: inline-flex;
  gap: 0.5rem;
`;

export default {
  Wrapper,
  Item,
  Link
};
