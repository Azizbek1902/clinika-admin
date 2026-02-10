import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left:14px;
  border-bottom: 1px solid var(--navbar-border-color);
  gap: 6px;
  transition: all 0.25s ease;
  height: 73px;
  

  .logo-img {
    width:56px;
    object-fit: cover;
    flex-shrink: 0;
    user-select: none;
  }
  .logo-img-colapse{
    width: 56px;
    margin-top: 1px;
    margin-left: -1px;
  }

  .logo-text {
      width: 100px;
      user-select: none;
      transition:
      opacity 0.2s ease,
      margin 0.2s ease;
  }
`;
