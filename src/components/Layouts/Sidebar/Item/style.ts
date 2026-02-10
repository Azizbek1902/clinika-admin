import styled from 'styled-components';

type Props = {
  $active?: boolean;
  $hovered?: boolean;
  $collapsed?: boolean;
  $isOpen?: boolean;
};
export const Wrapper = styled.div`
  position: relative;
  padding: 5px 18px;
`;

export const Container = styled.div<Props>`
  padding: 0 var(--sidebar-padding-x);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding-inline: 14.5px;
  background: ${({ $active, $hovered }) =>
    $active || $hovered ? 'var(--primary-color)' : ''};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Title = styled.span<Props>`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ $active, $hovered }) =>
    $active || $hovered ? '#fff' : 'var(--text-secondary)'};
  opacity: ${({ $collapsed }) => ($collapsed ? '0' : '1')};
  display: inline-block;
  transition: 0.1s;
`;

export const IconContainer = styled.div<Props>`
  color: ${({ $active, $hovered }) =>
    $active || $hovered ? '#fff' : 'var(--text-secondary)'};
  display: flex;
  align-items: center;
  min-width: 20px;
  margin-right: 6px;
  .ico {
    position: relative;
    top: 3px;
    left: 19px;
  }
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${({ $active, $hovered }) =>
    $active || $hovered ? '#fff' : 'var(--text-secondary)'};
    }
  }
`;
export const SubTitleContainer = styled.div<Props>`
  transition: ${({ $isOpen }) =>
    $isOpen ? '0.4s ease-in-out' : '0.4s ease-in-out'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: ${({ $isOpen }) => ($isOpen ? '5px' : '0')};
`;
export const ItemSubMenu = styled.div<Props>`
  display: flex;
  overflow: hidden;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  padding: 15px 0 15px 40px;
  cursor: pointer;
  border-radius: 8px;
  background: ${({ $active, $hovered }) =>
    $active || $hovered ? 'var(--primary-color)' : ''};
  color: ${({ $active, $hovered }) =>
    $active || $hovered ? '#fff' : 'var(--text-secondary)'};
  margin: 0px 20px;
  width: 92%;
`;
