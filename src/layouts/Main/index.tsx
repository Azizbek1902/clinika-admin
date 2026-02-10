import Navbar from '../../components/Layouts/Navbar';
import Sidebar from '../../components/Layouts/Sidebar';
import { Content, Main, Wrapper } from './style';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export default () => {
  const { isCollapsed } = useSelector((state: RootState) => state.sidebar);

  return (
    <Wrapper>
      <Sidebar />
      <Main $collapsed={isCollapsed}>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Wrapper>
  );
};
