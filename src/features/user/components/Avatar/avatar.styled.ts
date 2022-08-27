import styled, { css } from 'styled-components';

const getSizeOfAvatar = (size: 'sm' | 'md' | 'lg' | undefined) => {
  switch (size) {
    case 'sm':
      return css`
        width: 24px;
        height: 24px;
      `;
    case 'lg':
      return css`
        width: 90px;
        height: 90px;
      `;
    default:
      return css`
        width: 48px;
        height: 48px;
      `;
  }
};

const Wrapper = styled.button<{size?: 'sm' | 'md' | 'lg'}>`
  ${({ size }) => getSizeOfAvatar(size)}
  
  position: relative;
  border-radius: 50%;
  border-style: none;
  cursor: initial;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export {
  Wrapper
};
