import { GRAY_SCALE, MEDIA_BREAKPOINTS } from '@styles';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{reply?: boolean}>`
  display: flex;
  gap: 1rem;
  background: black;
  border-radius: 0.5rem;
  padding: 1rem;

  ${({ reply }) => reply && css`
    padding-left: 0 !important;
    padding-right: 0 !important;
  `}

  & > div {
    width: calc(100% - 4rem);

    ${({ reply }) => reply && css`
      width: calc(100% - 2.5rem);
    `}
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 1.75rem;
  }
`;

const Content = styled.div`
  color: ${GRAY_SCALE[600]};
  margin-top: 0.5rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  ${MEDIA_BREAKPOINTS.tablet} {
    gap: 1rem;
    flex-direction: row;
  }
`;

const ActionsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export {
  Wrapper,
  ActionsGroup,
  Content,
  MetaInfo
};
