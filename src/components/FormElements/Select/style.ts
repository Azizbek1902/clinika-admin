import styled from "styled-components";
import type { CustomSelectProps } from "./index";

export const StyledWrapper = styled.div<CustomSelectProps>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};

  .ant-select {
    width: 100%;
    height: ${({ $height }) => $height || "44px"};
  }

  .ant-select-selector {
    border-radius: ${({ $borderRadius }) => $borderRadius || "6px"};
    border: ${({ $border }) => $border || "1px solid #d9d9d9"};
    transition: all 0.3s ease;
  }

  .ant-select-selector:hover,
  .ant-select-selector:focus-within {
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 0 2px rgba(72, 127, 255, 0.15);
  }
`;
