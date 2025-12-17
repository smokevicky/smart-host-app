import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInput } from './NumberInput';

describe('NumberInput', () => {
    it('renders label and value', () => {
        render(<NumberInput label="Test Label" value={5} onChange={jest.fn()} />);
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
        expect(screen.getByRole('spinbutton')).toHaveValue(5);
    });

    it('calls onChange with new value', () => {
        const handleChange = jest.fn();
        render(<NumberInput label="Test" value={0} onChange={handleChange} testId="test-input" />);

        const input = screen.getByTestId('test-input');
        fireEvent.change(input, { target: { value: '10' } });

        expect(handleChange).toHaveBeenCalledWith(10);
    });

    it('handles empty input as 0', () => {
        const handleChange = jest.fn();
        render(<NumberInput label="Test" value={5} onChange={handleChange} testId="test-input" />);

        const input = screen.getByTestId('test-input');
        fireEvent.change(input, { target: { value: '' } });

        expect(handleChange).toHaveBeenCalledWith(0);
    });

    it('enforces minimum value 0', () => {
        const handleChange = jest.fn();
        render(<NumberInput label="Test" value={0} onChange={handleChange} testId="test-input" min={0} />);

        const input = screen.getByTestId('test-input');
        fireEvent.change(input, { target: { value: '-5' } });

        // Logic inside NumberInput prevents < min
        expect(handleChange).toHaveBeenCalledWith(0);
    });

    it('displays helper text', () => {
        render(<NumberInput label="Test" value={0} onChange={jest.fn()} helperText="Help me" />);
        expect(screen.getByText('Help me')).toBeInTheDocument();
    });
});
