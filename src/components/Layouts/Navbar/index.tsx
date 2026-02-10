import LogOut from './LogOut';
import { Header } from './style';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../../store/slices/sidebar';
import { useLocation } from 'react-router-dom';
import type { RootState } from '../../../store';
import { adminLinks } from '../Sidebar/helper';
import type { SidebarItem } from '../../../interface/sidebarItem';

export default () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { role } = useSelector((state: RootState) => state.auth);

    const routes: Record<string, SidebarItem[]> = {
        admin: adminLinks,
    };

    const currentRoutes = routes[role as string] || [];

    const currentPage = currentRoutes.find(item => item.path === pathname);

    return (
        <Header>
            <div className='menu-bar'>
                <button onClick={() => dispatch(toggleSidebar())}>
                    <FiMenu />
                </button>
                <span>{currentPage?.title}</span>
            </div>
            <LogOut />
        </Header>
    );
};
