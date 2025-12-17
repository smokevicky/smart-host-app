import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconLabel } from './IconLabel';
import { Home } from 'lucide-react';

const meta = {
    title: 'Atoms/IconLabel',
    component: IconLabel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IconLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: Home,
        label: 'Room Information',
    },
};
