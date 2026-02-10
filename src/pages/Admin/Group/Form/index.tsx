import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import service from '../../../../services/admin/group';
import { Col, Row } from 'antd';
import Loader from '../../../../components/Loader';
import InputComponent from '../../../../components/FormElements/Input';
import CustomButton from '../../../../components/FormElements/Button';
import styled from 'styled-components';
import CancelButton from '../../../../components/FormElements/CancelButton';
import { openErrorNotification } from '../../../../components/Notification';
import DatePickerComponent from '../../../../components/FormElements/Datepicker';
import dayjs from 'dayjs';

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
            desc: '',
            startDate: dayjs().format('YYYY-MM-DD'),
            endDate: dayjs().format('YYYY-MM-DD'),
        },
        enableReinitialize: true,
        onSubmit: async values => {
            try {
                setLoading(true);
                const payload = { ...values };
                if (state) {
                    await service.update(state, payload);
                } else {
                    await service.create(payload);
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
                .then(resp => {
                    formik.setValues({
                        title: resp?.data?.title || '',
                        desc: resp?.data?.desc || '',
                        startDate: resp?.data?.startDate || '',
                        endDate: resp?.data?.endDate || '',
                    });
                })
                .catch(err => {
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
                            label='Guruh nomi'
                            name='title'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            placeholder='1-guruh'
                        />
                    </Col>
                    <Col span={24}>
                        <InputComponent
                            label='Izoh'
                            name='desc'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.desc}
                            placeholder='Izoh kiriting'
                        />
                    </Col>
                    <Col span={12}>
                        <DatePickerComponent
                            label='Boshlanish sanasi'
                            value={formik.values.startDate}
                            onChange={val =>
                                formik.setFieldValue('startDate', val)
                            }
                            format='YYYY-MM-DD'
                            disabledDate={current =>
                                current &&
                                current > dayjs(formik.values.endDate)
                            }
                        />
                    </Col>
                    <Col span={12}>
                        <DatePickerComponent
                            label='Tugash sanasi'
                            value={formik.values.endDate}
                            onChange={val =>
                                formik.setFieldValue('endDate', val)
                            }
                            format='YYYY-MM-DD'
                            disabledDate={current =>
                                current &&
                                current < dayjs(formik.values.startDate)
                            }
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
