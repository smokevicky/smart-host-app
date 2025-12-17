import React, { ElementType } from 'react';
import { Box } from '@mui/material';
import { LucideProps } from 'lucide-react';
import { IconLabel } from '../../atoms/icon_label/IconLabel';
import { NumberInput } from '../../atoms/number_input/NumberInput';
import { containerStyles } from './RoomInput.styles';

interface RoomInputProps {
    icon: ElementType<LucideProps>;
    label: string;
    value: number;
    onChange: (value: number) => void;
    testId?: string;
    name?: string;
}

export const RoomInput: React.FC<RoomInputProps> = ({
    icon,
    label,
    value,
    onChange,
    testId,
}) => {
    return (
        <Box sx={containerStyles}>
            <IconLabel icon={icon} label={label} />
            <NumberInput
                label={`Free ${label}`}
                value={value}
                onChange={onChange}
                testId={testId}
                helperText="Must be 0 or greater"
            />
        </Box>
    );
};
