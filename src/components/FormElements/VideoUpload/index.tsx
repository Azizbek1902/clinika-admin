import { useState, useEffect } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps, RcFile } from 'antd/es/upload/interface';
import { HiOutlineTrash } from 'react-icons/hi2';
import Label from '../Label';

interface VideoUploadProps {
  multiple?: boolean;
  onChange?: (files: (File | string)[]) => void;
  maxCount?: number;
  label?: string;
  value?: (File | string)[];
}

const VideoUpload: React.FC<VideoUploadProps> = ({
  multiple = false,
  onChange,
  label,
  maxCount = multiple ? 5 : 1,
  value = [],
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  const baseURL = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const formatted = value.map((item, index) => {
      if (typeof item === 'string') {
        return {
          uid: String(index),
          name: `video-${index}`,
          status: 'done',
          url: `${baseURL}/${item}`,
        } as UploadFile;
      } else {
        const file = item as File;
        return {
          uid: String(index),
          name: file.name,
          status: 'done',
          originFileObj: file as unknown as RcFile, // ✅ RcFile sifatida cast
          url: URL.createObjectURL(file),
        } as UploadFile;
      }
    });

    setFileList(formatted);

    return () => {
      formatted.forEach((file) => {
        if (file.url && file.originFileObj) {
          URL.revokeObjectURL(file.url);
        }
      });
    };
  }, [value]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newList }) => {
    setFileList(newList);

    const files: (File | string)[] = newList
      .map((file) => {
        if (file.originFileObj) return file.originFileObj as unknown as File; // ✅
        if (file.url) return file.url as string;
        return undefined;
      })
      .filter((f): f is File | string => Boolean(f));

    onChange?.(files);
  };

  const handleRemove = (file: UploadFile) => {
    const updatedList = fileList.filter((f) => f.uid !== file.uid);
    setFileList(updatedList);

    const files: (File | string)[] = updatedList
      .map((f) =>
        f.originFileObj
          ? (f.originFileObj as unknown as File)
          : (f.url as string)
      )
      .filter((f): f is File | string => Boolean(f));

    onChange?.(files);
  };

  const handlePreview = (file: UploadFile) => {
    const videoSrc =
      file.url ||
      (file.originFileObj && URL.createObjectURL(file.originFileObj as RcFile));
    setPreviewVideo(videoSrc || null);
    setPreviewVisible(true);
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
        accept='video/*'
        maxCount={maxCount}
        showUploadList={false}
      >
        {fileList.length >= maxCount ? null : (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Video yuklash</div>
          </div>
        )}
      </Upload>

      {fileList.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {fileList.map((file) => (
              <div
                key={file.uid}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
              >
                <video
                  src={
                    file.url ||
                    (file.originFileObj &&
                      URL.createObjectURL(file.originFileObj as RcFile))
                  }
                  controls
                  style={{
                    width: 160,
                    height: 100,
                    objectFit: 'cover',
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    display: 'block',
                  }}
                />
                <div
                  onClick={() => handlePreview(file)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    backgroundColor: 'rgba(0,0,0,0)',
                  }}
                />
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
                    display: 'block',
                    margin: '0 auto',
                  }}
                >
                  <HiOutlineTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        footer={null}
        width={800}
        centered
      >
        {previewVideo && (
          <video
            src={previewVideo}
            controls
            autoPlay
            style={{
              width: '100%',
              maxHeight: '80vh',
              borderRadius: 8,
              outline: 'none',
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default VideoUpload;
