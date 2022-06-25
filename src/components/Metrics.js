import styled from 'styled-components';
const Metrics = () => {
  return (
    <MetricsContainer>
      <div>
        <strong>700만 명</strong>의 여행자
      </div>
      <div>
        <strong>100만 개</strong>의 여행리뷰
      </div>
      <div>
        <strong>470만 개</strong>의 여행 일정
      </div>
    </MetricsContainer>
  );
};

const MetricsContainer = styled.div`
  margin-left: 300px;
  padding-top: 150px;

  div {
    margin-bottom: 20px;
    font-size: var(--large-font-size);
  }
`;

export default Metrics;
