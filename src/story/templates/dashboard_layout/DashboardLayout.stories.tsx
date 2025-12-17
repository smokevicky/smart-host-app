import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardLayout } from './DashboardLayout';
import { Box, Typography } from '@mui/material';

const meta = {
    title: 'Templates/DashboardLayout',
    component: DashboardLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Occupancy Optimization',
        inputsSlot: (
            <Box p={2} bgcolor="#f5f5f5">
                <Typography>Inputs Slot</Typography>
            </Box>
        ),
        resultsSlot: (
            <Box p={2} bgcolor="#e3f2fd">
                <Typography>Results Slot</Typography>
            </Box>
        ),
    },
};
