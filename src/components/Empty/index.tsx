import { Empty } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 228px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Wrapper>
      <Empty description="Ma'lumot mavjud emas." />
    </Wrapper>
  );
};
