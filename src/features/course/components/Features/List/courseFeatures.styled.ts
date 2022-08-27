import { GRAY_SCALE, RESET_UL } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.aside``;

const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  ${RESET_UL}
`;

const Item = styled.li`
  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${GRAY_SCALE[100]};
  border-left: 1px solid ${GRAY_SCALE[100]};
  border-right: 1px solid ${GRAY_SCALE[100]};
`;

export {
  Wrapper,
  Head,
  List,
  Item
};
