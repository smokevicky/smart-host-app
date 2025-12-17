import { render, screen, fireEvent } from '@testing-library/react';
import { RoomInput } from './RoomInput';
import { BedDouble } from 'lucide-react';

describe('RoomInput', () => {
    it('renders icon, label, and input', () => {
        // Note: Icon rendering is part of IconLabel which is tested
        render(
            <RoomInput
                icon={BedDouble}
                label="Economy Rooms"
                value={10}
                onChange={jest.fn()}
                testId="room-input"
            />
        );
        expect(screen.getByText('Economy Rooms')).toBeInTheDocument();
        expect(screen.getByRole('spinbutton')).toHaveValue(10);
    });

    it('calls onChange', () => {
        const handleChange = jest.fn();
        render(
            <RoomInput
                icon={BedDouble}
                label="Test Rooms"
                value={0}
                onChange={handleChange}
                testId="room-input"
            />
        );

        const input = screen.getByTestId('room-input');
        fireEvent.change(input, { target: { value: '5' } });

        expect(handleChange).toHaveBeenCalledWith(5);
    });
});
