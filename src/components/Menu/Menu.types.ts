export type MenuProps = {
  items: MenuItem[];
};

export type DropdownProps = {
  submenus: SubMenuProps;
  dropdown: boolean;
  depthLevel: number;
};

export type MenuItemsProps = {
  items: MenuItem[];
  depthLevel: number;
};

export type SubMenuProps = {
  title: string;
  path: string;
  subMenu?: SubMenuProps;
};
export type Item = {
  title: string;
  path: string;
  subMenu: SubMenuProps[];
};
export type MenuItem = {
  items: {
    title: string;
    subMenu: {
      title: string;
      subMenu: Item[];
    };
  };
};
