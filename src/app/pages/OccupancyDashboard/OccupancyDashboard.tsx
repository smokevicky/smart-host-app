import React from 'react';
import { Box } from '@mui/material';
import { BedDouble, BedSingle } from 'lucide-react';
import { useRoomState } from '../../customHooks/useRoomState';
import { DashboardLayout } from '../../../story/templates/dashboard_layout/DashboardLayout';
import { RoomInput } from '../../../story/molecules/room_input/RoomInput';
import { RevenueRow } from '../../../story/molecules/revenue_row/RevenueRow';

export const OccupancyDashboard: React.FC = () => {
    const {
        freePremiumRooms,
        freeEconomyRooms,
        setFreePremiumRooms,
        setFreeEconomyRooms,
        occupancy,
    } = useRoomState();

    const totalAllocated = freePremiumRooms + freeEconomyRooms;

    const InputsSection = (
        <Box
            sx={{
                display: 'flex',
                gap: 4,
                flexWrap: 'wrap',
                justifyContent: 'center',
                mb: 2
            }}
        >
            <RoomInput
                icon={BedDouble}
                label="Premium Rooms"
                value={freePremiumRooms}
                onChange={setFreePremiumRooms}
                testId="free-premium-rooms"
            />
            <RoomInput
                icon={BedSingle}
                label="Economy Rooms"
                value={freeEconomyRooms}
                onChange={setFreeEconomyRooms}
                testId="free-economy-rooms"
            />
        </Box>
    );

    const ResultsSection = totalAllocated === 0 ? (
        <Box display="flex" justifyContent="center" mt={4}>
            <div data-testid="empty-state-message" style={{ fontFamily: 'sans-serif', color: '#666' }}>
                No rooms can be allocated for the current configuration.
            </div>
        </Box>
    ) : (
        <Box sx={{ mt: 2 }}>
            <RevenueRow
                label="Premium Rooms"
                occupancy={occupancy.premiumUsed}
                capacity={freePremiumRooms}
                revenue={occupancy.premiumRevenue}
                occupancyTestId="premium-occupancy"
                revenueTestId="premium-rooms-total-revenue"
                upgradeCount={occupancy.netUpgraded}
            />
            <RevenueRow
                label="Economy Rooms"
                occupancy={occupancy.economyUsed}
                capacity={freeEconomyRooms}
                revenue={occupancy.economyRevenue}
                occupancyTestId="economy-occupancy"
                revenueTestId="economy-rooms-total-revenue"
            />
            <RevenueRow
                label="Total Revenue for the Night"
                revenue={occupancy.totalRevenue}
                revenueTestId="total-revenue"
                isTotal
            />
        </Box>
    );

    return (
        <DashboardLayout
            title="Global Hotel Occupancy"
            inputsSlot={InputsSection}
            resultsSlot={ResultsSection}
        />
    );
};
