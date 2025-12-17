import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { OccupancyDashboard } from './OccupancyDashboard';

const meta = {
    title: 'Pages/OccupancyDashboard',
    component: OccupancyDashboard,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof OccupancyDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
