import styled from 'styled-components';

export const Header = styled.header`
  height: var(--navbar-height);
  background: var(--navbar-bg-color);
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #121212;
  display: flex;
  height: 72px;
  button {
    background: white !important;
    font-size: 24px;
    padding: 7px 12px 2px 13px;
    border: none;
    color: #121212;
    margin-top: 4px;
  }

  .menu-bar {
    display: flex;
    align-items: center;
    font-size: 24px;
    gap: 10px;
    font-weight: 600;
  }
`;
