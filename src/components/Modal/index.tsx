import React from 'react';
import { Modal } from 'antd';

interface CustomModalProps {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title = "Ma'lumot",
  content,
  onOk,
  width,
  height,
  onCancel,
  className,
}) => {
  return (
    <Modal
      width={width && width}
      height={height && height}
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={false}
      centered
      className={className && className}
      styles={{ body: { padding: '16px' } }}
    >
      {content}
    </Modal>
  );
};

export default CustomModal;
