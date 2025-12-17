import React, { ReactNode } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { rootStyles, headerStyles, sectionStyles, contentStyles } from './DashboardLayout.styles';

interface DashboardLayoutProps {
    title: string;
    inputsSlot: ReactNode;
    resultsSlot: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    title,
    inputsSlot,
    resultsSlot,
}) => {
    return (
        <Container maxWidth="md" sx={rootStyles}>
            <Paper elevation={3} sx={contentStyles}>
                <Box sx={headerStyles}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        {title}
                    </Typography>
                </Box>

                <Box sx={sectionStyles}>
                    {inputsSlot}
                </Box>

                <Box sx={sectionStyles}>
                    {resultsSlot}
                </Box>
            </Paper>
        </Container>
    );
};
