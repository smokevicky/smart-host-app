import type { Meta, StoryObj } from '@storybook/react-vite';
import { RevenueRow } from './RevenueRow';

const meta = {
    title: 'Molecules/RevenueRow',
    component: RevenueRow,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RevenueRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Premium: Story = {
    args: {
        label: 'Premium',
        occupancy: 3,
        revenue: 738,
        revenueTestId: 'premium-revenue',
    },
};

export const Total: Story = {
    args: {
        label: 'Total',
        revenue: 1000,
        revenueTestId: 'total-revenue',
        isTotal: true,
    },
};
