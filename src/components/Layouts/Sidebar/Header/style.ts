import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  border-bottom: 1px solid var(--navbar-border-color);
  gap: 20px;
  transition: all 0.25s ease;
  height: 73px;

  .logo-img {
    width: 56px;
    object-fit: cover;
    flex-shrink: 0;
    user-select: none;
  }
  .logo-img-colapse {
    width: 56px;
    margin-top: 1px;
    margin-left: -1px;
  }

  .logo-text {
    font-size: 25px;
    font-family: none;
  }
`;
