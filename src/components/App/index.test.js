import React from 'react';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  const { unmount } = render(<index />);
  unmount();
});
