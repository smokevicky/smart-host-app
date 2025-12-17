import { SxProps, Theme } from '@mui/material/styles';

export const rootStyles: SxProps<Theme> = {
    py: 4,
};

export const contentStyles: SxProps<Theme> = {
    p: 4,
    borderRadius: 2,
};

export const headerStyles: SxProps<Theme> = {
    mb: 4,
};

export const sectionStyles: SxProps<Theme> = {
    mb: 4,
    '&:last-child': {
        mb: 0,
    },
};
