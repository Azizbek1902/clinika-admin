import { Logo } from './style';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store';
import LogoImage from '../../../../assets/doktora.jpg';

export default () => {
  const { isCollapsed } = useSelector((state: RootState) => state.sidebar);

  return (
    <Logo data-collapsed={isCollapsed}>
      <img src={LogoImage} className='logo-img' alt='logo' />
      <div className='logo-text'>A-Doktor-A</div>
    </Logo>
  );
};
