
import React from 'react';
import { TextField } from '@mui/material';
import { inputStyles } from './NumberInput.styles';

interface NumberInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    testId?: string;
    helperText?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
    label,
    value,
    onChange,
    min = 0,
    testId,
    helperText,
}) => {
    return (
        <TextField
            label={label}
            type="number"
            value={value}
            onChange={(e) => {
                const val = e.target.value === '' ? 0 : parseInt(e.target.value);
                onChange(val < min ? min : val);
            }}
            inputProps={{ min, 'data-testid': testId }}
            sx={inputStyles}
            variant="outlined"
            fullWidth
            helperText={helperText}
        />
    );
};

