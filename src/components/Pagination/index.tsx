import type { PaginationProps } from 'antd';
import React from 'react';
import { PaginationWrapper } from './style';
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from 'react-icons/ri';

export interface CustomPaginationProps extends PaginationProps {}

const CustomPagination: React.FC<CustomPaginationProps> = ({ ...rest }) => {
  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement
  ) => {
    if (type === 'prev') {
      return (
        <a>
          <RiArrowLeftDoubleLine size={20} />
        </a>
      );
    }
    if (type === 'next') {
      return (
        <a>
          <RiArrowRightDoubleLine size={20} />
        </a>
      );
    }
    return originalElement;
  };

  return (
    <PaginationWrapper
      defaultCurrent={1}
      total={50}
      pageSize={10}
      showSizeChanger={false}
      itemRender={itemRender}
      {...rest}
    />
  );
};

export default CustomPagination;
