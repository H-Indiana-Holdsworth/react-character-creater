import { render } from '@testing-library/react';
import Preview from './Preview';

test('renders the preview component', () => {
  const container = render(<Preview head="vader-head" torso="black-torso" legs="black-legs" />);
  expect(container).toMatchSnapshot();
});
