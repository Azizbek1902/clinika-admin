import styled from 'styled-components';

export const Content = styled.div`
  background: var(--white-color);
  padding: 0px 24px 24px 24px;
  border-radius: var(--content-radius);
  min-height: calc(100vh - 105px);
  /* margin-top: 20px; */
  box-shadow: 0 0.25rem 1.875rem rgba(46, 45, 116, 0.05);

  .filter-panel {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 16px 0;
    border-bottom: 1px solid #d1d5db80;
    .filters {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
`;

export const ContentForm = styled.div`
  background: var(--white-color);
  padding: 15px;
  border-radius: var(--content-radius);
  box-shadow: var(--box-shadow);
  min-height: max-content;
  margin-top: 10px;
  .form {
    padding: 10px;
  }

  .btnStyle {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0px;
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
`;
