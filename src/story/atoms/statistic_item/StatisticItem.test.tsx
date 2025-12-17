import { render, screen } from '@testing-library/react';
import { StatisticItem } from './StatisticItem';

describe('StatisticItem', () => {
    it('renders label and value', () => {
        render(<StatisticItem label="Test Label" value="100" />);
        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('renders data-value attribute when provided', () => {
        render(<StatisticItem label="Revenue" value="€ 500" dataValue={500} testId="rev-item" />);
        const element = screen.getByTestId('rev-item');
        expect(element).toHaveAttribute('data-value', '500');
    });
});
