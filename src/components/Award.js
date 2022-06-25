import styled from 'styled-components';

const Award = () => {
  return (
    <AwardList>
      <GoogleAward>
        2018 구글 플레이스토어 <br />
        올해의 앱 최우수상 수상
        <p></p>
      </GoogleAward>
      <AppleAward>
        2018 애플 앱스토어 <br />
        오늘의 여행앱 선정
      </AppleAward>
    </AwardList>
  );
};

const AwardList = styled.div`
  margin: 50px 0 140px 300px;
  white-space: nowrap;

  div {
    display: inline-block;
    height: 54px;
    margin-right: 39px;
    padding: 5px 0 5px 62px;
    background-size: 54px 54px;
    background-position: left top;
    background-repeat: no-repeat;
    font-size: var(--small-font-size);
    color: var(--small-font-color);
    line-height: 22px;
  }
`;

const GoogleAward = styled.div`
  background-image: url('assets/play-store2x.png');
`;

const AppleAward = styled.div`
  background-image: url('assets/badge-apple4x.png');
`;

export default Award;