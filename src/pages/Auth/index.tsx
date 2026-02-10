import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import service from '../../services/admin/auth';
import { login } from '../../store/slices/auth';
import { Wrapper, LoginBox, UserBox, Button } from './style';
import InputComponent from '../../components/FormElements/Input';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { openErrorNotification } from '../../components/Notification';
import PhoneInput from '../../components/FormElements/MaskedInput';
import Phone from '../../components/Icons/Ui/Phone';

interface DecodedToken {
    role?: string;
    user?: {
        id: string;
        name: string;
    };
    exp?: number;
    prefix: number;
    province: string;
    group: string;
}

export default function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleAuth = async () => {
        setLoading(true);
        try {
            const res = await service.userAuth({ phone, password });

            if (res.data?.token) {
                const token = res.data.token;
                localStorage.setItem('DKP_access_token', token);
                const decoded: DecodedToken = jwtDecode(token);

                dispatch(
                    login({
                        token,
                        role: decoded?.role as string,
                        user: decoded?.user || { id: '', name: '' },
                        prefix: decoded?.prefix,
                        province: decoded?.province ?? '',
                        group: decoded?.group ?? '',
                    })
                );
            }
        } catch (err: any) {
            console.log(err);
            openErrorNotification(err?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleAuth();
    };

    return (
        <Wrapper>
            <LoginBox>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <UserBox>
                        <PhoneInput
                            value={phone}
                            onChange={val => setPhone(val)}
                            placeholder='+998 (__) ___-__-__'
                            $borderRadius='12px'
                            prefix={<Phone />}
                            style={{ background: 'white' }}
                            styleInput={{ fontSize: '18px' }}
                        />
                    </UserBox>

                    <UserBox>
                        <InputComponent
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            disabled={loading}
                            prefix={<FiLock size={20} color='#4B5563' />}
                            suffix={
                                showPassword ? (
                                    <FiEyeOff
                                        size={20}
                                        style={{
                                            cursor: 'pointer',
                                            color: '#4B5563',
                                        }}
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <FiEye
                                        size={20}
                                        style={{
                                            cursor: 'pointer',
                                            color: '#4B5563',
                                        }}
                                        onClick={() => setShowPassword(true)}
                                    />
                                )
                            }
                            placeholder='Parol'
                            borderR='12px'
                            borderColor='#D1D5DB'
                            fontSize='18px'
                        />
                    </UserBox>

                    <Button className='btn' type='submit' disabled={loading}>
                        {loading ? 'Kutilmoqda...' : 'Kirish'}
                    </Button>
                </form>
            </LoginBox>
        </Wrapper>
    );
}
