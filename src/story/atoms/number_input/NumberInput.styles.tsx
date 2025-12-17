import { SxProps, Theme } from '@mui/material/styles';

export const inputStyles: SxProps<Theme> = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#e0e0e0',
        },
        '&:hover fieldset': {
            borderColor: '#0056b3',
        },
    },
};
