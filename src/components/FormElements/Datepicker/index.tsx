import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { StyledDatePicker } from './style';
import Label from '../Label';

interface IDatePickerProps {
    value?: string | null;
    onChange?: (dateString: string | null | undefined) => void;
    format?: string;
    placeholder?: string;
    disabled?: boolean;
    showTime?: boolean;
    width?: string;
    height?: string;
    label?: string;
    allowClear?: boolean;
    getPopupContainer?: any;
    picker?: any;
    disabledDate?: (currentDate: Dayjs) => boolean;
}

const DatePickerComponent: React.FC<IDatePickerProps> = ({
    value,
    onChange,
    format = 'YYYY-MM-DD',
    placeholder = 'Sanani tanlang',
    disabled = false,
    showTime = false,
    label,
    width = '100%',
    height,
    allowClear,
    getPopupContainer,
    picker = 'date',
    disabledDate,
}) => {
    return (
        <>
            {label && <Label label={label} />}
            <StyledDatePicker
                value={value ? dayjs(value, format) : null}
                onChange={date => onChange?.(date ? date.format(format) : null)}
                format={format}
                placeholder={placeholder}
                disabled={disabled}
                showTime={showTime}
                $width={width}
                $height={height}
                allowClear={allowClear}
                getPopupContainer={getPopupContainer}
                picker={picker}
                disabledDate={disabledDate}
            />
        </>
    );
};

export default DatePickerComponent;
