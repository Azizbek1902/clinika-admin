import { notification } from 'antd';
export const openErrorNotification = (message: string) => {
  notification.error({
    message: 'Xatolik',
    description: message || "Noma'lum xatolik yuz berdi",
    placement: 'topRight',
  });
};
