import { GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';

export const MainPublic = styled.main<{isLight?: boolean}>`
  min-height: calc(100vh - 361px);

  ${({ isLight }) => isLight && css`
    margin-top: -85px;
    background: ${GRAY_SCALE[1000]};
  `}
`;

export const WrapperAuth = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(74.4deg, #0B0D17 49.65%, rgba(9, 10, 18, 0.83) 85.92%, rgba(8, 9, 16, 0.688258) 98.83%), url('/img/image1.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
`;
