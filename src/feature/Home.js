import styled from 'styled-components';

const Home = () => {
  return (
    <Main>
      <ImageContainer>
        <img src="/assets/triple2x.png" alt="triple 이미지" />
        <div>2021년 12월 기준</div>
      </ImageContainer>
      <TextContainer>
        <h3>
          <strong>700만 명</strong>의 여행자
        </h3>
        <h3>
          <strong>100만 개</strong>의 여행리뷰
        </h3>
        <h3>
          <strong>470만 개</strong>의 여행 일정
        </h3>
        <div>
          <AwardList>
            <div className="google-award">
              <img
                src="/assets/play-store2x.png"
                alt="구글 플레이스토어 이미지"
              />
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
        </div>
      </TextContainer>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 80px auto;

  section {
    width: 50%;
  }
`;

const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 400px;
  }
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: var(--large-font-size);
  }
`;

const AwardList = styled.div`
  display: flex;

  img {
    width: 55px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export default Home;
