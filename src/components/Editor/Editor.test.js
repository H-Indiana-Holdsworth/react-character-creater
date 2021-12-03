import { render } from '@testing-library/react';
import Editor from './Editor';

test('renders Editor components', () => {
  const container = render(<Editor head torso legs phrase />);
  expect(container).toMatchSnapshot();
});
