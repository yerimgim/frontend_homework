import { cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Metrics from '../components/Metrics';

afterEach(cleanup);

describe('<Metrics />', () => {
  it('Metrics 컴포넌트의 metric-items의 class를 총 갯수를 테스트합니다', () => {
    const { container } = render(<Metrics />);
    const metricItems = container.getElementsByClassName('metric-item');

    expect(metricItems.length).toBe(3);
  });
});
