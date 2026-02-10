import { Logo } from './style';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store';
import LogoImage from '../../../../assets/logo.png';
import LogoText from '../../../../assets/logo-text.png';

export default () => {
    const { isCollapsed } = useSelector((state: RootState) => state.sidebar);

    return (
        <Logo data-collapsed={isCollapsed}>
            <img src={LogoImage} className='logo-img' alt='logo' />
            <img src={LogoText} className='logo-text' alt='logo' />
        </Logo>
    );
};
