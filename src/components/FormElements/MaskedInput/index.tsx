import React from 'react';
import { PatternFormat } from 'react-number-format';
import { InputWrapper } from './style';
import Label from '../Label';

interface PhoneInputProps {
  value: string;
  onChange: (val: string) => void; // endi string qaytaradi
  placeholder?: string;
  className?: string;
  name?: string;
  $status?: string;
  $height?: string;
  $borderRadius?: string;
  label?: string;
  style?: React.CSSProperties;
  styleInput?: React.CSSProperties;
  prefix?: React.ReactNode;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  name,
  $status,
  $height,
  $borderRadius,
  label,
  style,
  prefix,
  styleInput,
}) => {
  return (
    <>
      {label && <Label label={label} />}
      <InputWrapper
        $status={$status}
        $height={$height}
        $borderRadius={$borderRadius}
        style={style}
      >
        {prefix && (
          <span style={{ marginRight: '8px', marginTop: '5px' }}>{prefix}</span>
        )}
        <PatternFormat
          style={styleInput}
          format="+998 (##) ###-##-##"
          mask="_"
          allowEmptyFormatting
          value={value}
          onValueChange={(values) => onChange(values.value)}
          name={name}
          placeholder={placeholder}
          className={className || 'phone-input'}
        />
      </InputWrapper>
    </>
  );
};

export default PhoneInput;
