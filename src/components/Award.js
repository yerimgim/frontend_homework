import styled from 'styled-components';

const Award = () => {
  return (
    <AwardList>
      <div className="google-award">
        <img src="/assets/play-store2x.png" alt="구글 플레이스토어 이미지" />
        <p>
          2018 구글 플레이스토어 <br />
          올해의 앱 최우수상 수상
        </p>
      </div>
      <div className="apple-award">
        <img src="/assets/badge-apple4x.png" alt="애플 앱스토어 이미지" />
        <p>
          2018 애플 앱스토어 <br />
          오늘의 여행앱 선정
        </p>
      </div>
    </AwardList>
  );
};

const AwardList = styled.div`
  display: flex;

  img {
    width: 55px;
  }

  div {
    display: flex;
    align-items: center;
    padding-right: 52px;
  }

  p {
    font-size: var(--small-font-size);
    line-height: 22px;
  }
`;

export default Award;
