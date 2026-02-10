import styled from 'styled-components';
import { Pagination } from 'antd';

export const PaginationWrapper = styled(Pagination)`
  .ant-pagination-item {
    background-color: #f0f0f0;
    border: none;
    border-radius: 8px;
    min-width: 32px;
    height: 32px;
    margin: 0 4px;

    a {
      color: #333;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &:hover {
      background-color: #e0e0e0;
      a {
        color: #333;
      }
    }
  }

  .ant-pagination-item-active {
    background-color: #1890ff;

    a {
      color: #fff;
    }

    &:hover {
      background-color: #1890ff;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    background-color: #f0f0f0;
    border: none;
    border-radius: 8px;
    height: 32px;
    margin: 0 4px;
    padding: 0;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      color: #333;
    }

    .ant-pagination-item-link {
      color: #333;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &:hover {
      background-color: #e0e0e0;
      a {
        color: #333;
      }
    }
  }

  .ant-pagination-disabled {
    background-color: #f0f0f0;
    opacity: 1;
    cursor: not-allowed;

    .ant-pagination-item-link,
    a {
      color: #aaa;
    }
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
