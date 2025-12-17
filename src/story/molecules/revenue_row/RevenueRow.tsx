import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { ArrowUpRight } from 'lucide-react';
import { StatisticItem } from '../../atoms/statistic_item/StatisticItem';
import { formatCurrency } from '../../../app/utilities/currencyFormatter';
import { rowContainerStyles, labelBoxStyles, statsBoxStyles } from './RevenueRow.styles';

interface RevenueRowProps {
    label: string;
    occupancy?: number;
    capacity?: number;
    revenue: number;
    revenueTestId: string;
    occupancyTestId?: string;
    isTotal?: boolean;
    upgradeCount?: number;
}

export const RevenueRow: React.FC<RevenueRowProps> = ({
    label,
    occupancy,
    capacity,
    revenue,
    revenueTestId,
    occupancyTestId,
    isTotal = false,
    upgradeCount = 0,
}) => {
    const occupancyValue = capacity !== undefined && occupancy !== undefined
        ? `${occupancy} / ${capacity}`
        : occupancy;

    return (
        <Paper sx={rowContainerStyles(isTotal)} elevation={isTotal ? 3 : 1}>
            <Box sx={labelBoxStyles}>
                <Typography variant="h6" color={isTotal ? 'primary' : 'textPrimary'} fontWeight={isTotal ? 700 : 400}>
                    {label}
                </Typography>
                {upgradeCount > 0 && (
                    <Box display="flex" alignItems="center" mt={0.5} color="text.secondary">
                        <ArrowUpRight size={16} />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                            {upgradeCount} Economy guests upgraded to Premium
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box sx={statsBoxStyles}>
                {occupancyValue !== undefined && (
                    <StatisticItem
                        label="Occupancy"
                        value={occupancyValue}
                        testId={occupancyTestId}
                    />
                )}
                <StatisticItem
                    label="Revenue"
                    value={formatCurrency(revenue)}
                    testId={revenueTestId}
                    dataValue={revenue}
                />
            </Box>
        </Paper>
    );
};
