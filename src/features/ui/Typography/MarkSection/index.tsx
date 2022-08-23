import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const MarkSection = styled.h2`
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  font-size: 120px;
  color: rgba(255,255,255,0.08);
  font-weight: 600;

  ${MEDIA_BREAKPOINTS.laptop} {
    top: 20%;
    font-size: 200px;
    color: rgba(255,255,255,0.03);
  }
`;

export default MarkSection;
