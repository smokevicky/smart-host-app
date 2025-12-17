import { render, screen, fireEvent, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from '../../slices/roomsSlice';
import { OccupancyDashboard } from './OccupancyDashboard';

// Helper to render with Redux
const renderWithRedux = (component: React.ReactNode) => {
    const store = configureStore({
        reducer: { rooms: roomsReducer },
    });
    return render(<Provider store={store}>{component}</Provider>);
};

describe('OccupancyDashboard', () => {
    it('updates revenue when inputs change', () => {
        renderWithRedux(<OccupancyDashboard />);

        // Get inputs
        const premiumInput = screen.getByTestId('free-premium-rooms');
        const economyInput = screen.getByTestId('free-economy-rooms');

        // Case: Premium 3, Economy 3 (Test 1)
        fireEvent.change(premiumInput, { target: { value: '3' } });
        fireEvent.change(economyInput, { target: { value: '3' } });

        // Check Occupancy Format "Used / Available"
        expect(screen.getByTestId('premium-occupancy')).toHaveTextContent('3 / 3');
        expect(screen.getByTestId('economy-occupancy')).toHaveTextContent('3 / 3');

        // Check Revenue
        expect(screen.getByTestId('premium-rooms-total-revenue')).toHaveTextContent('€ 738');
        expect(screen.getByTestId('economy-rooms-total-revenue')).toHaveTextContent('€ 167');

        // Total Revenue
        expect(screen.getByTestId('total-revenue')).toHaveTextContent('€ 905');
        // Check Label
        expect(screen.getByText('Total Revenue for the Night')).toBeInTheDocument();
    });

    it('handles Test Case 4 (Premium Upgrade) and shows indicator', () => {
        renderWithRedux(<OccupancyDashboard />);

        const premiumInput = screen.getByTestId('free-premium-rooms');
        const economyInput = screen.getByTestId('free-economy-rooms');

        // Case: Premium 7, Economy 1
        fireEvent.change(premiumInput, { target: { value: '7' } });
        fireEvent.change(economyInput, { target: { value: '1' } });

        // Check Occupancy Format
        // 6 Premium used + 1 Upgrade = 7 used. Capacity 7.
        expect(screen.getByTestId('premium-occupancy')).toHaveTextContent('7 / 7');
        // 1 Economy used. Capacity 1.
        expect(screen.getByTestId('economy-occupancy')).toHaveTextContent('1 / 1');

        // Check Upgrade Indicator
        expect(screen.getByText('1 Economy guests upgraded to Premium')).toBeInTheDocument();

        // Revenue Check
        expect(screen.getByTestId('premium-rooms-total-revenue')).toHaveAttribute('data-value', '1153');
        expect(screen.getByTestId('economy-rooms-total-revenue')).toHaveAttribute('data-value', '45');
    });

    it('shows empty state when 0 rooms are allocated', () => {
        renderWithRedux(<OccupancyDashboard />);
        const premiumInput = screen.getByTestId('free-premium-rooms');
        const economyInput = screen.getByTestId('free-economy-rooms');

        fireEvent.change(premiumInput, { target: { value: '0' } });
        fireEvent.change(economyInput, { target: { value: '0' } });

        expect(screen.getByTestId('empty-state-message')).toHaveTextContent('No rooms can be allocated for the current configuration.');
        expect(screen.queryByTestId('premium-rooms-total-revenue')).not.toBeInTheDocument();
    });
});
