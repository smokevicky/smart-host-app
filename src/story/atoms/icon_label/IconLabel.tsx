import React, { ElementType } from 'react';
import { Box, Typography } from '@mui/material';
import { LucideProps } from 'lucide-react';
import { containerStyles, textStyles } from './IconLabel.styles';

interface IconLabelProps {
    icon: ElementType<LucideProps>;
    label: string;
}

export const IconLabel: React.FC<IconLabelProps> = ({ icon: Icon, label }) => {
    return (
        <Box sx={containerStyles}>
            <Icon size={24} />
            <Typography sx={textStyles} variant="h6">
                {label}
            </Typography>
        </Box>
    );
};
