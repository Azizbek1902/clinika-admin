import styled from 'styled-components';

export const Wrapper = styled.div<{
  width?: string;
  height?: string;
  textAlign?: 'left' | 'center' | 'right';
}>`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #f0f0f0;
    padding: 10px;
    text-align: ${({ textAlign }) => textAlign || 'left'};
  }
  th {
    background: #fafafa;
    font-weight: 600;
  }
  tr:hover td {
    background: #fafafa;
  }
  .actions {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: 0.2s;
  }
  button.edit {
    color: #1890ff;
  }
  button.edit:hover {
    background: #e6f4ff;
  }
  button.delete {
    color: #ff4d4f;
  }
  button.delete:hover {
    background: #fff1f0;
  }
`;

export const Wrap = styled.div`
  font-family:
    Inter,
    Roboto,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
  width: 100%;
  margin: 20px auto;
  background: #fff;
`;

export const TableWrap = styled.div`
  overflow-x: auto;
`;

export const TableEl = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 600px;
  border: 1px solid #ebecef;
  border-radius: 8px;
  overflow: hidden;
  thead tr:first-child th:first-child {
    border-top-left-radius: 8px;
  }
  thead tr:first-child th:last-child {
    border-top-right-radius: 8px;
  }
  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }
  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px 12px;
  font-size: 13px;
  color: #0f172a;
  border-bottom: 1px solid #e2e8f0;
  background: #f5f6fa;
`;

export const Td = styled.td`
  padding: 12px 12px;
  border-top: 1px solid #f1f5f9;
  font-size: 14px;
  color: #0f172a;
`;

export const Tr = styled.tr`
  transition: background 120ms ease;
  &:hover {
    background: #f9fbfc;
  }
`;
