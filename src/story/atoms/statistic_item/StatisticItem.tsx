import React from 'react';
import { Box, Typography } from '@mui/material';
import { containerStyles, labelStyles, valueStyles } from './StatisticItem.styles';

export interface StatisticItemProps {
    label: string;
    value: string | number;
    testId?: string;
    dataValue?: number;
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
    label,
    value,
    testId,
    dataValue,
}) => {
    return (
        <Box sx={containerStyles}>
            <Typography variant="body2" sx={labelStyles}>
                {label}
            </Typography>
            <Typography
                variant="h6"
                sx={valueStyles}
                data-testid={testId}
                data-value={dataValue}
            >
                {value}
            </Typography>
        </Box>
    );
};
