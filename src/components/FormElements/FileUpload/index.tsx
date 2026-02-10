import { useState, useEffect } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps, RcFile } from 'antd/es/upload/interface';
import { HiOutlineTrash } from 'react-icons/hi2';
import Label from '../Label';

interface FileUploadProps {
  multiple?: boolean;
  onChange?: (files: (File | string)[]) => void;
  maxCount?: number;
  label?: string;
  value?: (File | string)[];
}

const FileUpload: React.FC<FileUploadProps> = ({
  multiple = false,
  onChange,
  label,
  maxCount = multiple ? 10 : 1,
  value = [],
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const baseURL = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    if (value && value.length) {
      const formatted: UploadFile[] = value.map((item, index) => {
        if (typeof item === 'string') {
          return {
            uid: String(index),
            name: `file-${index}`,
            status: 'done',
            url: `${baseURL}/${item}`,
          };
        } else {
          return {
            uid: String(index),
            name: item.name,
            status: 'done',
            originFileObj: item as RcFile,
            url: URL.createObjectURL(item),
          };
        }
      });
      setFileList(formatted);
    } else {
      setFileList([]);
    }

    return () => {
      value.forEach((item) => {
        if (item instanceof File) {
          URL.revokeObjectURL(URL.createObjectURL(item));
        }
      });
    };
  }, [value]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const files = newFileList
      .map((file) => {
        if (file.originFileObj) return file.originFileObj as File;
        if (file.url) return file.url as string;
        return undefined;
      })
      .filter((f): f is File | string => f !== undefined);

    onChange?.(files);
  };

  const handleRemove = (file: UploadFile) => {
    const newFileList = fileList.filter((f) => f.uid !== file.uid);
    setFileList(newFileList);
    const files = newFileList.map((f) => f.originFileObj || f.url) as (
      | File
      | string
    )[];
    onChange?.(files);
  };

  const renderPreview = (file: UploadFile, index: number) => {
    const isImage = file.type?.startsWith('image/');
    const ext = file.name.split('.').pop()?.toLowerCase();

    const fileIcons: Record<string, string> = {
      pdf: '📕',
      doc: '📘',
      docx: '📘',
      xls: '📗',
      xlsx: '📗',
      csv: '📙',
    };

    return (
      <div
        key={file.uid}
        style={{
          display: 'flex',
          boxShadow: 'var(--box-shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.05))',
          padding: '5px',
          borderRadius: '10px',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {isImage ? (
          <img
            src={file.url || URL.createObjectURL(file.originFileObj as RcFile)}
            alt={`preview-${index}`}
            style={{
              width: 60,
              height: 60,
              objectFit: 'cover',
              borderRadius: 8,
              border: '1px solid #ddd',
            }}
          />
        ) : (
          <div
            style={{
              width: 60,
              height: 60,
              fontSize: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              border: '1px solid #ddd',
            }}
          >
            {fileIcons[ext || ''] || '📄'}
          </div>
        )}
        <span style={{ fontSize: 14 }}>{file.name}</span>
        <button
          type='button'
          onClick={() => handleRemove(file)}
          style={{
            background: 'none',
            color: '#000',
            padding: '5px 10px',
            cursor: 'pointer',
            border: 'none',
            fontSize: '18px',
          }}
        >
          <HiOutlineTrash />
        </button>
      </div>
    );
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
        accept='image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv'
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
            {fileList.map(renderPreview)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
