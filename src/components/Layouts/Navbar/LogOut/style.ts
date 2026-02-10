import styled from 'styled-components';

export const UserMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--dark-color);
  font-size: 15px;
  user-select: none;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  img{
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
    .role{
      /* margin-top: 12px; */
      display: flex;
      div{
        font-weight: 600;
      }
    p{
      font-size: 18px;
      text-align: end;
      margin-top: 17px;
    }
  }
`;

export const Dropdown = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 85%;
  right: 0;
  background: var(--sidebar-bg-color);
  border: 1px solid var(--navbar-border-color);
  border-radius: 8px;
  min-width: 170px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: ${({ $open }) => ($open ? 'block' : 'none')};

  padding: 8px;
  z-index: 10;


  
  .icon {
    font-size: 22px;
  }
  .btn {
    width: 100%;
    background: none;
    border: none;
    color: var(--dark-color);
    padding: 8px 14px;
    text-align: left;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;
    outline: none;
    transition: background 0.2s;

    &:hover {
      color: var(--danger-color);
      /* color: white; */
    }
  }
`;
