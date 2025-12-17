import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 1,
};

export const labelStyles: SxProps<Theme> = {
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    letterSpacing: '0.5px',
};

export const valueStyles: SxProps<Theme> = {
    fontWeight: 700,
};
