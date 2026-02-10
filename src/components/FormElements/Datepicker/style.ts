import styled from 'styled-components';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

export const StyledDatePicker = styled(DatePicker) <
  DatePickerProps & {
    $width?: string;
    $height?: string;
  }
>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '44px'};

  .ant-picker-input > input {
    height: ${({ $height }) => $height || '44px'};
  }
`;
