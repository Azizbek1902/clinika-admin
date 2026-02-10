import styled from 'styled-components';
import type { InputWrapperProps } from './index';

export const InputWrapper = styled.div<InputWrapperProps>`
  .error {
    color: #f00;
    font-size: 11px;
    font-weight: 500;
    padding-top: 2px;
  }

  .ant-input {
    padding: ${({ $padding }) => $padding || '4px 11px'};
    border-radius: ${({ borderR }) => borderR || '6px'};
    border: 1px solid #dfe1e7;
    border-left: ${({ $borderLeft }) => $borderLeft || '1px solid #dfe1e7'};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '44px'};
    color: ${({ color }) => color || '#232F3F'};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    font-weight: 600;
    line-height: 16px;

    &::placeholder {
      color: ${({ color }) => color || '#A9ACB4'};
      font-size: 16px;
      font-weight: 400;
      line-height: 14px;
    }
  }

  .ant-input-affix-wrapper .ant-input-prefix {
    margin-right: 8px !important;
  }
  .ant-input-outlined:focus {
    box-shadow: none;
    outline: 0;
    border: 1px solid var(--primary-color);
  }

  .ant-input-group-wrapper-outlined .ant-input-group-addon {
    background: ${({ $backgroundAddon }) => $backgroundAddon || ''};
    width: ${({ $widthAddon }) => $widthAddon || ''};
    opacity: ${({ opacity }) => opacity || ''};
  }
`;
