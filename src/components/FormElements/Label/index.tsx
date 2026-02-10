import type { FC } from 'react';
import { Title } from './style';
interface LableProps {
    label?: string;
}

const Label: FC<LableProps> = ({ label }) => {
    return (
        <div>
            <Title>{label}</Title>
        </div>
    );
};

export default Label;
