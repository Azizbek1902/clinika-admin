import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import service from '../../../../services/admin/user';
import { Col, Row } from 'antd';
import Loader from '../../../../components/Loader';
import InputComponent from '../../../../components/FormElements/Input';
import CustomButton from '../../../../components/FormElements/Button';
import styled from 'styled-components';
import CancelButton from '../../../../components/FormElements/CancelButton';
import { openErrorNotification } from '../../../../components/Notification';
import PhoneInput from '../../../../components/FormElements/MaskedInput';

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
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      role: 'registrator',
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
            firstName: resp?.data?.firstName,
            lastName: resp?.data?.lastName,
            phone: resp?.data?.phone,
            password: resp?.data?.password,
            role: resp?.data?.role,
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

  if (loading) return <Loader height='278px' />;

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='form'>
        <Row gutter={[20, 20]}>
          <Col span={24} md={12}>
            <InputComponent
              label='Ism'
              name='firstName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder='Bekzod'
            />
          </Col>
          <Col span={24} md={12}>
            <InputComponent
              label='Familya'
              name='lastName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder='Mahammadov'
            />
          </Col>
          <Col span={24} md={12}>
            <PhoneInput
              label='Raqam'
              name='phone'
              onChange={(e) => {
                formik.setFieldValue('phone', e);
              }}
              value={formik.values.phone}
              placeholder='+998 (__) ___-__-__'
              $borderRadius='12px'
              style={{
                background: 'white',
                borderRadius: '6px',
                height: '44px',
              }}
            />
          </Col>
          <Col span={24} md={12}>
            <InputComponent
              label='Parol'
              name='password'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.password}
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
