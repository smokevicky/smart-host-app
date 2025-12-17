import type { Meta, StoryObj } from '@storybook/react-vite';
import { RoomInput } from './RoomInput';
import { BedDouble } from 'lucide-react';

const meta = {
    title: 'Molecules/RoomInput',
    component: RoomInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RoomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: BedDouble,
        label: 'Premium Rooms',
        value: 5,
        onChange: () => { },
    },
};
