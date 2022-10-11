import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Suggestion } from './Suggestion';

describe('Suggestion.tsx', () => {
  it('renders correctly', async () => {
    const onSelect = jest.fn();
    const suggestion = 'Saint Petersburg';
    const { container } = render(
      <Suggestion suggestion={suggestion} onSelect={onSelect} />
    );

    expect(container).toMatchSnapshot();
  });
  it('should call "onSelect" on click', async () => {
    const onSelect = jest.fn();
    const suggestion = 'Saint Petersburg';
    render(<Suggestion suggestion={suggestion} onSelect={onSelect} />);

    userEvent.click(screen.getByText(suggestion));

    expect(onSelect).toBeCalledTimes(1);
  });
});
