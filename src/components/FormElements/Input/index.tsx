// InputComponent.tsx
import type { FC } from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd';
import { InputWrapper } from './style';
import Label from '../Label';

export interface InputWrapperProps extends InputProps {
  width?: string;
  $widthAddon?: string;
  fontSize?: string;
  height?: string;
  color?: string;
  label?: string;
  $backgroundAddon?: string;
  $padding?: string;
  opacity?: string;
  error?: string;
  $borderLeft?: string;
  borderR?: string;
  borderColor?: string;
  bgColor?: string;
}

const InputComponent: FC<InputWrapperProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  label,
  error,
  width,
  $widthAddon,
  fontSize,
  opacity,
  height,
  color,
  $borderLeft,
  $padding,
  $backgroundAddon,
  borderR,
  borderColor,
  bgColor,
  ...rest
}) => {
  const inputStatus = error ? 'error' : rest.status;

  return (
    <InputWrapper
      width={width}
      $widthAddon={$widthAddon}
      height={height}
      $padding={$padding}
      color={color}
      $backgroundAddon={$backgroundAddon}
      $borderLeft={$borderLeft}
      opacity={opacity}
    >
      {label && <Label label={label} />}
      <Input
        value={value}
        placeholder={placeholder || ''}
        onChange={onChange}
        onBlur={onBlur}
        status={inputStatus}
        style={{
          borderRadius: borderR && borderR,
          borderColor: borderColor && borderColor,
          background: bgColor && bgColor,
          fontSize: fontSize && fontSize,
        }}
        {...rest}
      />
      {error && (
        <div
          className="error"
          style={{ color: 'red', marginTop: '5px', fontSize: '12px' }}
        >
          {error}
        </div>
      )}
    </InputWrapper>
  );
};

export default InputComponent;
