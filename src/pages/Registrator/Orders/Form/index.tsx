import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import service from '../../../../services/admin/orderUser';
import servicedoktor from '../../../../services/admin/services';
import { Col, Row } from 'antd';
import Loader from '../../../../components/Loader';
import InputComponent from '../../../../components/FormElements/Input';
import CustomButton from '../../../../components/FormElements/Button';
import styled from 'styled-components';
import CancelButton from '../../../../components/FormElements/CancelButton';
import { openErrorNotification } from '../../../../components/Notification';
import CustomSelect from '../../../../components/FormElements/Select';
import { formatPrice } from '../helper';

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
  const [doktors, setDoktors] = useState<{ label: string; value: string }[]>(
    [],
  );
  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      doktor: '',
      year: '',
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
            fullName: resp?.data?.fullName || '',
            year: resp?.data?.year || '',
            doktor: resp?.data?.doktor._id,
            address: resp?.data?.address,
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

  const fetchDoktor = async () => {
    try {
      const res = await servicedoktor.getAll();
      const final = res?.data?.map(
        (item: {
          title?: string;
          _id?: string;
          doktor?: string;
          price?: number;
        }) => ({
          label: `${item?.title} — ${item?.doktor} | ${formatPrice(item?.price)} so'm`,
          value: item?._id,
        }),
      );
      setDoktors(final || []);
    } catch (err: any) {
      console.log(err);
      openErrorNotification(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchDoktor();
  }, []);

  if (loading) return <Loader height='400px' />;

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='form'>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <InputComponent
              label='F.I.SH'
              name='fullName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.fullName}
              //   placeholder="O'tkan kunlar"
            />
          </Col>
          <Col span={24}>
            <InputComponent
              label='Manzil'
              name='address'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.address}
              //   placeholder=''
            />
          </Col>
          <Col span={24}>
            <InputComponent
              label='Yil'
              name='year'
              type='number'
              onChange={formik.handleChange}
              value={formik.values.year}
            />
          </Col>
          <Col span={24}>
            <CustomSelect
              allowClear
              options={doktors}
              label='Doktor tanlang'
              onChange={(e) => {
                formik.setFieldValue('doktor', e);
              }}
              value={formik?.values?.doktor || null}
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
