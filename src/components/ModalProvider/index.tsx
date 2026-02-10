import {
  createContext,
  useContext,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { Modal } from 'antd';

interface ModalOptions {
  title?: string;
  body?: ReactNode;
  maxWidth?: number | string;
  maxHeight?: number | string;
  footer?: ReactNode;
  centered?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  padding?: number | string;
  borderRadius?: number | string;
  fullWidth?: boolean;
}

interface ModalContextType {
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<ModalOptions>({});

  const openModal = (options: ModalOptions) => {
    setModalOptions(options);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAfterClose = () => {
    // modal to‘liq yopilgandan keyin barcha ma’lumotlarni tozalaydi
    setModalOptions({});
  };

  const {
    title,
    body,
    maxWidth,
    maxHeight,
    footer,
    centered = true,
    closable = true,
    maskClosable = true,
    padding = 0,
    borderRadius = 12,
    fullWidth = false,
  } = modalOptions;

  const bodyStyle: CSSProperties = {
    maxHeight: maxHeight
      ? typeof maxHeight === 'number'
        ? `${maxHeight}px`
        : maxHeight
      : undefined,
    overflowY: maxHeight ? 'auto' : undefined,
    padding: typeof padding === 'number' ? `${padding}px` : padding,
  };

  const modalStyle: CSSProperties = {
    width: fullWidth ? '100%' : undefined,
    maxWidth: maxWidth
      ? typeof maxWidth === 'number'
        ? `${maxWidth}px`
        : maxWidth
      : '',
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    overflow: 'hidden',
  };
  const radiusValue =
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Modal
        open={isOpen}
        onCancel={closeModal}
        title={title}
        footer={footer ?? null}
        centered={centered}
        closable={closable}
        maskClosable={maskClosable}
        width={modalStyle.maxWidth}
        style={modalStyle}
        styles={{ body: bodyStyle }}
        destroyOnHidden
        afterClose={handleAfterClose}
        modalRender={(node) => (
          <div
            style={{
              borderRadius: radiusValue,
              padding: '0px',
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            {node}
          </div>
        )}
      >
        {body}
      </Modal>
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line
export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used inside <ModalProvider>');
  return ctx;
}
