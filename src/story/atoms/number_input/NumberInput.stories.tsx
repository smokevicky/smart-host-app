import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput } from './NumberInput';

const meta = {
    title: 'Atoms/NumberInput',
    component: NumberInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Rooms',
        value: 0,
        onChange: () => { },
    },
};

export const WithValue: Story = {
    args: {
        label: 'Premium Rooms',
        value: 10,
        onChange: () => { },
    },
};
