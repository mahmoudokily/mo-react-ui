export type MenuItem = {
    label: string;
    path: string;
    subMenu?: MenuItem[];
    roles?: string[];
};
export type MenuProps = {
    items: MenuItem[];
    active: string;
    onClickItem: (item: string) => () => void;
};
