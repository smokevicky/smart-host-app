import type { Meta, StoryObj } from '@storybook/react';
import { StatisticItem } from './StatisticItem';
import { formatCurrency } from '../../../app/utilities/currencyFormatter';

const meta = {
    title: 'Atoms/StatisticItem',
    component: StatisticItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StatisticItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Occupancy',
        value: 6,
    },
};

export const WithCurrency: Story = {
    args: {
        label: 'Revenue',
        value: formatCurrency(1054),
    },
};
