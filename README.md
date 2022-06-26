# 트리플 프론트엔드 과제 - 김예림

<br />

![사전과제 gif](https://user-images.githubusercontent.com/95286903/175789644-523c3c46-b755-477f-b146-76a57c2ad33c.gif)

<br />

## 과제 진행 기간

6월 20일(월) - 6월 27일(월) 자정 까지

<br />

## 프로젝트 실행 방법

```
npm install 후, npm start 명령어를 사용해주세요.
```

http://localhost:3000/ 에서 확인이 가능합니다.

<br />

## 기술 명세

| Client           | Common   |
| ---------------- | -------- |
| React            | Eslint   |
| Styled-component | Prettier |
| Testing-library  |          |

<br />

## 사용한 기술, 선택한 이유

### Styled-component

이 기술을 사용한 가장 큰 이유는 createGlobalStyle을 사용하여 하위 모든 컴포넌트에 스타일을 일괄 적용 및 애니메이션 구현, 컴포넌트 별로 style 적용이 편리하다는 점이었습니다.

<br />

## 디렉토리 구조

```
.
├── README.md
├── package-lock.json
├── package.json
├── public                             이미지
│   ├── assets
│   │   ├── badge-apple4x.png
│   │   ├── play-store2x.png
│   │   └── triple2x.png
│   └── index.html
└── src
    ├── app
    │   └── App.js
    ├── common
    │   ├── hooks                      커스텀 훅
    │   │   └── useCountUp.js
    │   └── utils                      유틸
    │       └── easeOutAnimate.js
    ├── components                     컴포넌트
    │   ├── Award.js
    │   ├── Logo.js
    │   └── Metrics.js
    ├── index.js
    ├── setupTests.js
    ├── style                          스타일
    │   ├── GlobalStyle.js
    │   └── keyframes
    │       └── keyframes.js
    └── test                           테스트
        ├── App.test.js
        └── Award.test.js
```

<br />

## 정리 및 느낀점

요구 사항을 확인 후 구현을 하기 앞서, 레이아웃 구성, 스타일 디렉토리 구조 등 기초적인 부분을 체크하는 데 시간을 많이 사용하였습니다.

그리고 UI를 모두 구성한 후 애니메이션 명세에서 투명도, 떠오르는 듯한 애니메이션 구현에는 어렵지 않았지만, 숫자를 올리는 애니메이션에서 생각보다 많은 시간을 사용하였습니다.
숫자를 올리는 애니메이션은 커스텀 훅을 사용하여 구현을 하였습니다.

1주일 동안 구조, 기본적인 구성, 태그 명 등 기초적인 부분에 신경을 쓰며 작업을 했습니다. 틀을 하나하나 생각하고 구성하는 데에는 시간이 많이 들었지만 그만큼 기초를 더욱더 단단히 하는 시간이었다고 생각합니다.
기본적인 틀을 적절히 배치 시켜놓으니 폴더별로 구분된 것을 확인하기 쉬웠고, 코드를 읽기에도 한결 수월했습니다.

이렇게 기초를 잡고 과제를 진행할 수 있었다는 점, 많이 공부하고 배울 수 있었던 시간이라고 생각하여 트리플에 감사하다는 말씀 전하고 싶습니다.
감사합니다.
