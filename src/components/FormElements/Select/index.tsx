import { Select } from 'antd';
import { StyledWrapper } from './style';
import Label from '../Label';
import type { SelectProps } from 'antd';
import React from 'react';

export interface CustomSelectProps extends SelectProps {
  $height?: string;
  $width?: string;
  $borderRadius?: string;
  $border?: string;
  label?: string;
  error?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  $height,
  $width,
  $borderRadius,
  $border,
  label,
  error,
  ...rest
}) => {
  const selectStatus = error ? 'error' : rest.status;

  return (
    <StyledWrapper
      $height={$height}
      $width={$width}
      $borderRadius={$borderRadius}
      $border={$border}
    >
      {label && <Label label={label} />}
      <Select status={selectStatus} {...rest} />
      {error && (
        <div
          className="error"
          style={{ color: 'red', marginTop: '5px', fontSize: '12px' }}
        >
          {error}
        </div>
      )}
    </StyledWrapper>
  );
};

export default CustomSelect;
