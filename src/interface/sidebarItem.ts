import type { ReactElement, Dispatch, SetStateAction } from 'react';
export interface SidebarItem {
  id?: string; // Unique identifier qo'shing
  path?: string;
  title: string;
  icon?: ReactElement;
  children?: { id?: string; path: string; title: string }[]; // Childlar ham id ga ega bo'lsin
  isOpen?: boolean | null;
  setIsOpen?: Dispatch<SetStateAction<boolean | null>>;
  handleClik?: () => void;
}