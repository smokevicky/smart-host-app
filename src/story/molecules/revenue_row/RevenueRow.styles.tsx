import { SxProps, Theme } from '@mui/material/styles';

export const rowContainerStyles = (isTotal: boolean): SxProps<Theme> => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    marginBottom: 2,
    backgroundColor: isTotal ? '#f0f7ff' : '#fff',
    border: isTotal ? '1px solid #1976d2' : 'none',
});

export const labelBoxStyles: SxProps<Theme> = {
    flex: 1,
};

export const statsBoxStyles: SxProps<Theme> = {
    display: 'flex',
    gap: 4,
};
