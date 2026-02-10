import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemSubMenu } from '../style';

interface ItemProps {
    title: string;
    path: string;
    className?: string;
}

const ItemSub = ({ title, path, className }: ItemProps) => {
    const navigate = useNavigate();
    const [hoveredSub, setHoveredSub] = useState<boolean>(false);
    const isActive = (checkPath: string) => {
        const current = window.location.pathname;
        if (checkPath === '/') return current === '/'; // root faqat aynan '/' bo'lsa active
        return current.startsWith(checkPath);
    };

    const handleNavigateSubElement = (path: string) => {
        navigate(path, { replace: true });
    };
    return (
        <ItemSubMenu
            className={className}
            $hovered={hoveredSub}
            $active={isActive(path)}
            onMouseOver={() => setHoveredSub(true)}
            onMouseLeave={() => setHoveredSub(false)}
            onClick={() => handleNavigateSubElement(path)}
        >
            {title?.length > 20 ? title.slice(0, 22) + ' ...' : title}
        </ItemSubMenu>
    );
};

export default ItemSub;
