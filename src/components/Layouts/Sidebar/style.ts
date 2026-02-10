import styled from "styled-components";

export const SidebarWrapper = styled.aside<{ $collapsed: boolean }>`
  position: ${({ $collapsed }) => ($collapsed ? "absolute" : "absolute")};
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  height: 100%;
  width: ${({ $collapsed }) => ($collapsed ? "87px" : "var(--sidebar-width)")};
  background: var(--sidebar-bg-color);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--navbar-border-color);
  transition: width 0.25s ease;

  ::-webkit-scrollbar{
    display: none;
  }

  ${({ $collapsed }) =>
    $collapsed &&
    `
    .title,
    .logo-text {
      display: none;
    }
    .logo-text-sub{
      display: none;
    }

    &:hover {
      width: var(--sidebar-width);

      .title,
      .logo-text {
        display: block;
      }
      .logo-text-sub {
        display: block;
        padding-top: 12px;
      }
    }
  `}
`;
