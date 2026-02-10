import { ScaleLoader } from 'react-spinners';
import { Wrapper } from './style';

interface Props {
  color?: string;
  height?: string;
}

export default ({ color, height }: Props) => {
  return (
    <Wrapper $height={height}>
      <ScaleLoader color={color ? color : 'var(--primary-color)'} />
    </Wrapper>
  );
};
