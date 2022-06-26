import styled from 'styled-components';

import useCountUp from '../common/hooks/useCountUp';
import { fadeInUp } from '../style/keyframes/keyframes';

const Metrics = () => {
  const users = useCountUp(700);
  const reviews = useCountUp(100);
  const schedules = useCountUp(470);

  return (
    <MetricsContainer>
      <p className="metric-item">
        <strong>{users}만 명</strong>의 여행자
      </p>
      <p className="metric-item">
        <strong>{reviews}만 개</strong>의 여행 리뷰
      </p>
      <p className="metric-item">
        <strong>{schedules}만 개</strong>의 여행 일정
      </p>
    </MetricsContainer>
  );
};

const MetricsContainer = styled.article`
  margin-left: 300px;
  padding-top: 150px;
  color: var(--metrics-font-color);
  font-size: var(--metrics-font-size);
  letter-spacing: -1px;
  animation: ${fadeInUp} 700ms ease-out 100ms;

  .metric-item {
    margin-bottom: 20px;
  }
`;

export default Metrics;
