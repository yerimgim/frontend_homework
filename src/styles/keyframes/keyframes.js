import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  50% {
    opacity: 0.4;
    transition: 700ms ease-in-out;
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;
