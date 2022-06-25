import { cleanup, render, screen } from '@testing-library/react';

import Award from '../components/Award';

afterEach(cleanup);

describe('<Award />', () => {
  it('Award 컴포넌트의 style을 테스트 합니다.', () => {
    render(
      <div>
        <Award />
      </div>,
    );
    const awardList = Award().type.styledComponentId;
    const awardRoot = document.getElementsByClassName(awardList);
    const style = window.getComputedStyle(awardRoot[0]);

    expect(style.whiteSpace).toBe('nowrap');
    expect(style.marginTop).toBe('50px');
    expect(style.marginBottom).toBe('140px');
    expect(style.marginLeft).toBe('300px');
  });

  it('Award 컴포넌트의 text를 테스트합니다', () => {
    render(<Award />);
    const googleAwardText = screen.getByText(/2018 구글 플레이스토어/i);
    const appleAwardText = screen.getByText(/2018 애플 앱스토어/i);

    expect(googleAwardText).toBeInTheDocument();
    expect(appleAwardText).toBeVisible();
  });

  it('Award 컴포넌트가 br태그를 가지고 있는지 테스트합니다. ', () => {
    const { container } = render(<Award />);
    const brTag = container.querySelector('br');

    expect(brTag).toBeInTheDocument();
  });
});
