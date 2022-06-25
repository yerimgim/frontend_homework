import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);
    const logoText = screen.getByText(/2021년 12월 기준/i);

    expect(logoText).toBeInTheDocument();
  });
});
