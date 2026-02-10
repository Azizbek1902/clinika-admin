import { useState, useEffect } from 'react';
import { Image, Upload, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps, RcFile } from 'antd/es/upload/interface';
import { HiOutlineTrash, HiOutlineEye } from 'react-icons/hi2';
import Label from '../Label';

interface ImageUploadProps {
  multiple?: boolean;
  onChange?: (files: (File | string)[]) => void;
  onRemove?: (file: File | string) => Promise<void> | void;
  maxCount?: number;
  label?: string;
  value?: (File | string)[];
  accept?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  multiple = false,
  onChange,
  onRemove,
  label,
  maxCount = multiple ? 10 : 1,
  value = [],
  accept = 'image/*',
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const baseURL = import.meta.env.VITE_IMAGE_URL;

  // 🔄 Sync `value` → `fileList`
  useEffect(() => {
    if (!value) return;

    const formatted: UploadFile[] = value.map((item, index) => {
      if (typeof item === 'string') {
        const fileName = item.split('/').pop() || `file-${index}`;
        return {
          uid: `${index}`,
          name: fileName,
          status: 'done',
          url: item.startsWith('http') ? item : `${baseURL}/${item}`,
        };
      } else {
        const blobUrl = URL.createObjectURL(item);
        return {
          uid: `${index}`,
          name: item.name,
          status: 'done',
          originFileObj: item as RcFile,
          url: blobUrl,
        };
      }
    });

    setFileList(formatted);

    return () => {
      formatted.forEach((f) => {
        if (f.originFileObj) URL.revokeObjectURL(f.url!);
      });
    };
  }, [value]);

  // 🧩 Fayl qo‘shish
  const handleChange: UploadProps['onChange'] = ({ fileList: newList }) => {
    setFileList(newList);

    const files = newList
      .map((file) => {
        if (file.originFileObj) return file.originFileObj as File;
        if (file.url) return file.url.replace(`${baseURL}/`, '');
        return null;
      })
      .filter((f): f is File | string => f !== null);

    onChange?.(files);
  };

  // ❌ Faylni o‘chirish
  const handleRemove = async (file: UploadFile) => {
    try {
      const fileRef = file.originFileObj
        ? (file.originFileObj as File)
        : (file.url?.replace(`${baseURL}/`, '') as string);

      if (onRemove) await onRemove(fileRef);

      const updated = fileList.filter((f) => f.uid !== file.uid);
      setFileList(updated);

      const newValues = updated.map((f) =>
        f.originFileObj
          ? (f.originFileObj as File)
          : f.url?.replace(`${baseURL}/`, '')
      ) as (File | string)[];
      onChange?.(newValues);
    } catch (err: any) {
      console.error(err);
      notification.error({
        message: 'Xato',
        description: 'Faylni o‘chirishda muammo yuz berdi.',
      });
    }
  };

  // 👁 Preview (faqat rasm bo‘lsa Image preview, pdf → new tab, doc/xls → download)
  const handlePreview = (file: UploadFile) => {
    if (!file.url) return;

    const fileName = file.name.toLowerCase();

    if (fileName.endsWith('.pdf')) {
      window.open(file.url, '_blank');
    } else if (
      fileName.endsWith('.doc') ||
      fileName.endsWith('.docx') ||
      fileName.endsWith('.xls') ||
      fileName.endsWith('.xlsx')
    ) {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (fileName.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
      // ant Image o‘zi modal preview bilan keladi
      // hech nima qilinmaydi — faqat Image ko‘rsatamiz
    } else {
      notification.warning({
        message: 'Ko‘rish mumkin emas',
        description: `${file.name} formatli faylni ochib bo‘lmaydi.`,
      });
    }
  };

  return (
    <div>
      {label && <Label label={label} />}

      <Upload
        listType='picture-card'
        fileList={fileList}
        multiple={multiple}
        beforeUpload={() => false}
        onChange={handleChange}
        onRemove={handleRemove}
        accept={accept}
        maxCount={maxCount}
        showUploadList={false}
      >
        {fileList.length >= maxCount ? null : (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Yuklash</div>
          </div>
        )}
      </Upload>

      {fileList.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {fileList.map((file) => {
              const fileName = file.name.toLowerCase();
              const isImage = fileName.match(/\.(jpg|jpeg|png|gif|webp)$/);

              return (
                <div
                  key={file.uid}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '62px',
                    gap: '15px',
                    background: '#fafafa',
                    borderRadius: '10px',
                    padding: '6px 10px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {isImage ? (
                    <Image
                      src={file.url}
                      alt={file.name}
                      width={50}
                      height={50}
                      style={{
                        objectFit: 'cover',
                        borderRadius: 8,
                        border: '1px solid #ddd',
                        cursor: 'pointer',
                      }}
                    />
                  ) : (
                    <button
                      type='button'
                      onClick={() => handlePreview(file)}
                      style={{
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontSize: '18px',
                        color: '#1890ff',
                      }}
                      title='Ko‘rish'
                    >
                      <HiOutlineEye />
                    </button>
                  )}

                  <span
                    style={{
                      flex: 1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: 150,
                    }}
                  >
                    {file.name}
                  </span>

                  <button
                    type='button'
                    onClick={() => handleRemove(file)}
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      fontSize: '18px',
                      color: '#ff4d4f',
                    }}
                    title='O‘chirish'
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
