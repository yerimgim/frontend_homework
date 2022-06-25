import { cleanup, render, screen } from '@testing-library/react';

import App from '../app/App';

afterEach(cleanup);

describe('<App />', () => {
  it('App 컴포넌트의 해당 text를 가지고 있는지 테스트합니다. ', () => {
    render(<App />);
    const logoText = screen.getByText(/2021년 12월 기준/i);

    expect(logoText).toBeInTheDocument();
  });

  it('App 컴포넌트가 strong 태그를 가지고 있는지 테스트합니다. ', () => {
    const { container } = render(<App />);
    const strongTag = container.querySelector('strong');

    expect(strongTag).toBeInTheDocument();
  });
});
