import styled from 'styled-components';

interface StyledWrapperProps {
  $width?: string;
  $height?: string;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  width: ${({ $width }) => $width || '100%'};

  .error {
    color: red;
    margin-top: 5px;
    font-size: 12px;
  }

  .ant-input {
    min-height: ${({ $height }) => $height || '100px'} !important;
    height: ${({ $height }) => $height || '100px'} !important;
  }
`;
