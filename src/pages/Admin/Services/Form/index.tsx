import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import service from '../../../../services/admin/book';
import { Col, Row } from 'antd';
import Loader from '../../../../components/Loader';
import InputComponent from '../../../../components/FormElements/Input';
import CustomButton from '../../../../components/FormElements/Button';
import styled from 'styled-components';
import CancelButton from '../../../../components/FormElements/CancelButton';
import { openErrorNotification } from '../../../../components/Notification';

const Actions = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 20px;
`;

export default ({
  state,
  fetchData,
  onClose,
}: {
  state?: string | null;
  fetchData?: () => void;
  onClose?: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      doktor: '',
      price: 0,
      room: 0,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        const data = {
          ...values,
        };

        if (state) {
          await service.update(state, data);
        } else {
          await service.create(data);
        }

        fetchData?.();
        onClose?.();
        formik.resetForm();
      } catch (err: any) {
        console.log(err);
        openErrorNotification(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (state) {
      setLoading(true);
      service
        .getOne(state)
        .then((resp) => {
          formik.setValues({
            title: resp?.data?.title || '',
            doktor: resp?.data?.doktor || '',
            price: resp?.data?.price || 0,
            room: resp?.data?.room || 0,
          });
        })
        .catch((err) => {
          console.log(err);
          openErrorNotification(err?.response?.data?.message);
        })
        .finally(() => setLoading(false));
    } else {
      formik.resetForm();
    }
  }, [state]);

  if (loading) return <Loader height='400px' />;

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='form'>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <InputComponent
              label='Nomi'
              name='title'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.title}
              //   placeholder="O'tkan kunlar"
            />
          </Col>
          <Col span={24}>
            <InputComponent
              label='Doktor'
              name='doktor'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.doktor}
              placeholder='Doktor'
            />
          </Col>
          <Col span={24}>
            <InputComponent
              label='Xona raqami'
              name='room'
              type='number'
              onChange={formik.handleChange}
              value={formik.values.room}
              //   placeholder=''
            />
          </Col>
          <Col span={24}>
            <InputComponent
              label='Narxi'
              name='price'
              type='number'
              onChange={formik.handleChange}
              value={formik.values.price}
              //   placeholder=''
            />
          </Col>
        </Row>

        <Actions>
          <CancelButton
            onClick={() => {
              onClose?.();
            }}
          />
          <CustomButton htmlType='submit'>Saqlash</CustomButton>
        </Actions>
      </form>
    </>
  );
};
