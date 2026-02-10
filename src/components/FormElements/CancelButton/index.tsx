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
  onClick: () => void;
  $content?: React.ReactNode;
}

const StyledButton = styled(Button)<CustomButtonProps>`
  && {
    background: #fff;
    color: ${({ $color }) => $color || '#DC2626'};
    width: ${({ $width }) => $width || '133px'};
    height: ${({ $height }) => $height || '40px'};
    border-radius: ${({ $borderR }) => $borderR || '8px'};
    border: ${({ $border }) => $border || '1px solid #DC2626'};
    gap: ${({ $gap }) => $gap || '10px'};
    box-shadow: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    outline: none;
  }
`;

const CancelButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'primary',
  onClick,
  $content = 'Bekor qilish',
  ...rest
}) => {
  return (
    <StyledButton
      color="danger"
      variant="outlined"
      type={type}
      onClick={onClick}
      {...rest}
    >
      {$content}
    </StyledButton>
  );
};

export default CancelButton;
