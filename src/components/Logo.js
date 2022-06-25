import styled from 'styled-components';

import { fadeInUp } from '../style/keyframes/keyframes';

const Logo = () => {
  return <LogoContent>2021년 12월 기준</LogoContent>;
};

const LogoContent = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url('assets/triple2x.png');
  background-repeat: no-repeat;
  background-size: 400px 338px;
  color: var(--medium-font-color);
  font-size: var(--medium-font-size);
  text-align: center;
  box-sizing: border-box;
  animation: ${fadeInUp} 700ms ease-in-out 0ms;
`;

export default Logo;
