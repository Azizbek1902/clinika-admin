import Body from './Body';
import Header from './Header';
import { SidebarWrapper } from './style';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

// eslint-disable-next-line
export default () => {
  const { isCollapsed } = useSelector((state: RootState) => state.sidebar);

  return (
    <SidebarWrapper $collapsed={isCollapsed} data-collapsed={isCollapsed}>
      <Header />
      <Body />
    </SidebarWrapper>
  );
};
