import type { FC } from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import { StyledWrapper } from './style';
import Label from '../Label';

const { TextArea } = Input;

export interface CustomTextAreaProps extends TextAreaProps {
  label?: string;
  error?: string;
  $height?: string;
  $width?: string;
}

const TextAreaComponent: FC<CustomTextAreaProps> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  label,
  error,
  $height,
  $width,
  ...rest
}) => {
  const inputStatus = error ? 'error' : rest.status;

  return (
    <StyledWrapper $width={$width} $height={$height}>
      {label && <Label label={label} />}
      <TextArea
        value={value}
        placeholder={placeholder || ''}
        onChange={onChange}
        onBlur={onBlur}
        status={inputStatus}
        autoSize={{ minRows: 3, maxRows: 10 }}
        {...rest}
      />
      {error && <div className="error">{error}</div>}
    </StyledWrapper>
  );
};

export default TextAreaComponent;
