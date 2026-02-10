import { useEffect, useRef, useState } from 'react';
import { UserMenu, MenuButton, Dropdown } from './style';
import { useNavigate } from 'react-router-dom';
import { store, type RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import { logout } from '../../../../store/slices/auth';
import Img from '../../../../assets/user.png';
import { RiShutDownLine } from 'react-icons/ri';
// import { jwtDecode } from 'jwt-decode';

export default () => {
    const { role } = useSelector((state: RootState) => state.auth);
    // const token: any = localStorage.getItem('DKP_access_token') || '';
    // const [user, setUser] = useState<any>();

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        localStorage.removeItem('DKP_access_token');
        navigate('/', { replace: true });
        store.dispatch(logout());
    };

    const roleTitle = (role: string | null) => {
        let text;
        switch (role) {
            case 'admin':
                text = 'Admin';
                break;
            default:
                break;
        }
        return text;
    };

    // useEffect(() => {
    //   if (token) {
    //     setUser(jwtDecode(token));
    //   }
    // }, [token]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <UserMenu ref={menuRef}>
            <MenuButton onClick={() => setOpen(!open)}>
                <div className='role'>
                    {/* <div>{`${user?.firstName} ${user?.lastName}`}</div> */}
                    <p>{roleTitle(role)}</p>
                </div>
                <img src={Img} />
            </MenuButton>
            <Dropdown $open={open}>
                <div className='btn' onClick={handleLogout}>
                    <RiShutDownLine className='icon' />
                    Chiqish
                </div>
            </Dropdown>
        </UserMenu>
    );
};
