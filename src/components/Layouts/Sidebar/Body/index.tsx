import React, { useState } from 'react';
import { Container, Space } from './style';
import { useNavigate } from 'react-router-dom';
import Item from '../Item';
import type { RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import { adminLinks } from '../helper';

export const SidebarBody = () => {
  const { role } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());

  const handleNavigate = (url: string) => {
    navigate(url, { replace: true });
  };

  const toggleSubMenu = (id: string) => {
    setOpenSubMenus((prev) => {
      const newSet = new Set<string>();
      if (!prev.has(id)) {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isSubMenuOpen = (id: string) => openSubMenus.has(id);

  const routes: { [key: string]: any } = {
    admin: adminLinks,
  };

  return (
    <Container>
      <div>
        <Space />
        {adminLinks?.map(
          // {routes[role as string]?.map(
          ({ id, icon, path, title, children }: any) => (
            <Item
              key={id}
              id={id}
              path={path}
              icon={icon}
              title={title}
              children={children}
              handleClik={() => {
                if (children) {
                  toggleSubMenu(id);
                } else {
                  handleNavigate(path as string);
                  setOpenSubMenus(new Set());
                }
              }}
              isOpen={isSubMenuOpen(id)}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default React.memo(SidebarBody);
