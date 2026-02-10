import styled from 'styled-components';

export const Actions = styled.div`
  .actionsEditDelete {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .btnStyle {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0px;
  }
  .show {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: rgba(72, 127, 255, 0.15);
    border-radius: 50px;
  }
  .edit {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: rgba(69, 179, 105, 0.1490196078);
    border-radius: 50px;
  }
  .delete {
      width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: none;
    background-color: rgba(239, 71, 112, 0.1490196078);
    border-radius: 50px;
  }
  .show {
    svg {
      path {
        stroke: #487FFF !important ;
      }
    }
  }
  .edit {
    svg {
      path {
        stroke: #3aad60ff !important ;
      }
    }
  }
  
  .edit:hover {
    svg {
      path {
        stroke: #45B369 !important ;
      }
    }
  }
  
`;
