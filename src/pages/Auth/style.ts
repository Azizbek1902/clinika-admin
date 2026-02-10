import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
export const ImageBox = styled.div`
  background-image: url(https://i.pinimg.com/originals/68/40/20/684020afcf9d1d3e2cbed63bb898ead5.jpg);
  width: 65%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width:1100px) {
    display: none;
  }
`

export const LoginBox = styled.div`

 
  position: relative;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  form{
    width: 500px;
    display: flex;
    flex-direction: column;
    border: 1px solid #D1D5DB;
    padding: 40px;
    border-radius: 12px;
    padding-top: 20px;

  }
  img{
    width: 200px;
    margin-bottom: 30px;
  }

  h2 {
    padding: 0;
    color: #333;
    font-size: 36px;
    text-align: center;
    font-weight: 600;
  }
  .btn{
    height: 54px;
    border-radius: 12px;
  }

  @media screen and (max-width:1100px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

`;

export const UserBox = styled.div`
  position: relative;
  margin-bottom: 30px;



  label {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 16px;
    color: #666;
    pointer-events: none;
    transition: 0.3s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -15px;
    color: #1890ff;
    font-size: 12px;
  }
`;

const btnAnim1 = keyframes`
  0% { left: -100%; }
  50%, 100% { left: 100%; }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 12px 20px;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  background: #1890ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.4s;
  width: 100%;
  font-weight: bold;

  &:hover:enabled {
    background: #40a9ff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fff);
    animation: ${btnAnim1} 1s linear infinite;
  }
`;

export const RoleSelector = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  background: #f5f5f5;
`;

interface StyledButtonProps {
  $isActive?: boolean;
}

export const Button2 = styled.button<StyledButtonProps>`
  background: ${({ $isActive }) => ($isActive ? '#1890ff' : '#ffffff')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#333')};
  border: 1px solid ${({ $isActive }) => ($isActive ? '#1890ff' : '#ccc')};
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
  transition: all 0.3s ease;
  font-weight: normal;

  &:focus,
  &:focus-visible {
    outline: none;
  }
  &:hover:not(:disabled) {
    background: ${({ $isActive }) => ($isActive ? '#0070e0' : '#f5f5f5')};
    color: ${({ $isActive }) => ($isActive ? '#fff' : '#000')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
