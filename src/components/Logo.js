import styled from 'styled-components';

const Logo = () => {
  return <LogoContent>2021년 12월 기준</LogoContent>;
};

const LogoContent = styled.div`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  box-sizing: border-box;
  background-image: url('assets/triple2x.png');
  background-repeat: no-repeat;
  background-size: 400px 338px;
  font-size: var(--medium-font-size);
  text-align: center;
  color: var(--medium-font-color);
`;

export default Logo;
