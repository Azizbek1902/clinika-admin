// style.ts
import styled from "styled-components";

export const InputWrapper = styled.div<{ $status?: string; $height?: string; $borderRadius?: string }>`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  background: #f5f6fa;
  border-radius: ${({ $borderRadius }) => $borderRadius || "12px"};
  height: ${({ $height }) => $height || "53px"};
  padding: 0 12px;
  transition: all 0.2s ease;

  &:focus-within {
    box-shadow: 0 0 0px 1.5px rgba(165, 199, 255, 0.34);
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
  }
`;
