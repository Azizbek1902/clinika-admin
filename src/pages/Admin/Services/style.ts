import styled from "styled-components";

export const Active = styled.div`
  color: #45b369;
  background: rgba(69, 179, 105, 0.15);
  border-radius: 4px;
  min-width: 100px;
  max-width: 100px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid #45b369;
`;

export const NoActive = styled.div`
  color: #ef4a00;
  background: rgba(239, 71, 112, 0.15);
  border-radius: 4px;
  min-width: 100px;
  max-width: 100px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid #ef4a00;
`;