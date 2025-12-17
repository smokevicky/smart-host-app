import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    marginBottom: 2,
    color: 'primary.main',
};

export const textStyles: SxProps<Theme> = {
    fontWeight: 600,
};
