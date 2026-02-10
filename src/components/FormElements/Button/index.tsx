import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

import styled from 'styled-components';

export interface CustomButtonProps extends Omit<ButtonProps, 'color'> {
  $bg?: string;
  $color?: string;
  $width?: string;
  $height?: string;
  $borderR?: string;
  $border?: string;
  $gap?: string;
}

const StyledButton = styled(Button)<CustomButtonProps>`
  && {
    background: ${({ $bg }) => $bg || 'var(--primary-color)'};
    color: ${({ $color }) => $color || '#fff'};
    width: ${({ $width }) => $width || '133px'};
    height: ${({ $height }) => $height || '40px'};
    border-radius: ${({ $borderR }) => $borderR || '8px'};
    border: ${({ $border }) => $border || 'none'};
    gap: ${({ $gap }) => $gap || '10px'};
    box-shadow: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    outline: none;
    &:hover {
      background: ${({ $bg }) => $bg || 'var(--primary-color)'};
      color: ${({ $color }) => $color || '#fff'};
    }
  }
`;

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'primary',
  ...rest
}) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
