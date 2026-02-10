import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Main = styled.div<{ $collapsed: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: margin-left 0.25s ease, width 0.25s ease;

  margin-left: ${({ $collapsed }) => ($collapsed ? "87px" : "var(--sidebar-width)")};
  width: ${({ $collapsed }) =>
    $collapsed ? "calc(100% - 87px)" : "calc(100% - var(--sidebar-width))"};
`;

export const Content = styled.main`
  flex: 1;
  height: calc(100vh - var(--navbar-height) - 40px);
  padding: var(--content-padding);
  background: var(--content-bg-color);
  overflow: hidden auto;
`;
