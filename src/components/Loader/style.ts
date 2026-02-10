import styled from 'styled-components';

export const Wrapper = styled.div<{ $height?: string }>`
  width: 100%;
  height: 100%;
  min-height: ${({ $height }) =>
    $height ? `calc(100vh - ${$height})` : 'calc(100vh - 228px)'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
