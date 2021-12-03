import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home view', () => {
  const container = render(<Home />);
  expect(container).toMatchSnapshot();
});

test('renders headCount', () => {
  const component = render(<Home headCount torsoCount />);
  expect(component).toMatchSnapshot();
});
