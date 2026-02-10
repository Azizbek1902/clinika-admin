import { useState } from 'react';
import {
    Container,
    Title,
    Wrapper,
    IconContainer,
    Left,
    SubTitleContainer,
} from './style';

import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import ItemSub from './ItemSub';
import type { SidebarItem } from '../../../../interface/sidebarItem';

interface ItemProps extends SidebarItem {
    handleClik: () => void;
    isOpen: boolean;
}

const Item = ({
    path,
    title,
    icon,
    children,
    handleClik,
    isOpen,
}: ItemProps) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const isActive = (checkPath: string) => {
        const current = window.location.pathname;
        if (checkPath === '/') return current === '/';
        return current.startsWith(checkPath);
    };

    const res: number = children ? children.length * 40 : 0;

    return (
        <Wrapper>
            <Container
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                $active={!!(isActive(path as string) || isOpen)}
                $hovered={hovered}
                onClick={handleClik}
            >
                <Left>
                    <IconContainer
                        $active={!!(isActive(path as string) || isOpen)}
                        $hovered={hovered}
                    >
                        {icon}
                    </IconContainer>
                    <Title
                        $hovered={hovered}
                        $active={!!(isActive(path as string) || isOpen)}
                        className='logo-text'
                    >
                        {title?.length > 21
                            ? title.slice(0, 21) + ' ...'
                            : title}
                    </Title>
                </Left>
                {children && (
                    <IconContainer
                        $active={!!(isActive(path as string) || isOpen)}
                        $hovered={hovered}
                    >
                        {isOpen ? (
                            <FaAngleUp className='logo-text' />
                        ) : (
                            <FaAngleDown className='logo-text' />
                        )}
                    </IconContainer>
                )}
            </Container>
            {children && (
                <SubTitleContainer
                    $isOpen={!!isOpen}
                    style={{
                        height: isOpen ? `${res}px` : '0px',
                    }}
                >
                    {children.map(item => (
                        <ItemSub
                            key={item.id}
                            title={item.title}
                            path={item.path}
                            className='logo-text-sub'
                        />
                    ))}
                </SubTitleContainer>
            )}
        </Wrapper>
    );
};

export default Item;
