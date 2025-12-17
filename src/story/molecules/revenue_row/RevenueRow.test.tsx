import { render, screen } from '@testing-library/react';
import { RevenueRow } from './RevenueRow';

describe('RevenueRow', () => {
    it('renders label, occupancy, and revenue', () => {
        render(
            <RevenueRow
                label="Premium"
                occupancy={5}
                revenue={100}
                revenueTestId="test-rev"
            />
        );
        expect(screen.getByText('Premium')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('€ 100')).toBeInTheDocument();
    });

    it('renders correct data attributes', () => {
        render(
            <RevenueRow
                label="Total"
                revenue={500}
                revenueTestId="total-rev"
                isTotal
            />
        );
        const revenueItem = screen.getByTestId('total-rev');
        expect(revenueItem).toHaveAttribute('data-value', '500');
    });
});
