import { GRAY_SCALE, RESET_UL, TRANSITIONS } from '@styles';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const Lesson = styled.li<{active?: boolean}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &,a {
    color: ${GRAY_SCALE[900]};
    text-decoration: none;
  }

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${GRAY_SCALE[900]};
  }

  &::after {
    content: '';
    width: 1px;
    height: 100%;
    display: block;
    border-right: 1px dashed ${GRAY_SCALE[900]};
    position: absolute;
    top: 50%;
  }

  &:last-child {
    &::after { display: none; }
  }

  ${({ active, theme }) => active && css`
    a { color: ${theme.colors.secondary}; }
    &::before { background: ${theme.colors.secondary}; }
  `}

  &:hover {
    a { color: ${({ theme }) => theme.colors.secondary}; }
    &::before { background: ${({ theme }) => theme.colors.secondary}; }
  }
`;

const ListLesson = styled.ol`
  list-style: none;
  padding: 1rem 0 1rem 1.75rem;
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
`;

const Summary = styled.div`
  background: ${GRAY_SCALE[1000]};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: ${TRANSITIONS.base};
  
  &:hover {
    background: ${({ theme }) => rgba(theme.colors.secondary, 0.25)};
  }
  `;

const Details = styled.div``;

const AccordionItem = styled.li`
  display: block;
`;

const Accordion = styled.ol`
  ${RESET_UL}
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Wrapper = styled.div`
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: #000;
`;

export {
  Wrapper,
  Summary,
  Details,
  Accordion,
  ListLesson,
  Lesson,
  AccordionItem
};
