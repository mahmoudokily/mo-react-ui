import { Flex } from "../Flex";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MenuItem, MenuProps } from "./Menu.types";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li<{ selected?: boolean; activeParent?: boolean }>`
  cursor: pointer;
  ${({ selected, theme, activeParent }) =>
    selected
      ? `
 background-color:red;
 
`
      : ``};
  ${({ activeParent }) =>
    activeParent
      ? `
      color:red
      
      `
      : ``}
`;
const ListContainer = styled(Flex)``;
const List = styled.ul<{ isOpen?: boolean }>`
  ${({ isOpen }) =>
    isOpen
      ? `


`
      : `
display:none;
opacity:0;

`}
  list-style: none;
  padding: 0;
  margin: 0;
  animation: all 3s fade-in;
`;

const ItemSubMenus = ({
  item,
  isOpen,
  onClickItem,
  activeItem,
}: {
  item: MenuItem;
  isOpen: boolean;
  activeItem: string;
  onClickItem: (item: string) => () => void;
}) => {
  return (
    <List isOpen={isOpen}>
      {item?.subMenu?.map((item: MenuItem, index) => (
        <ListItem
          key={index}
          selected={item.path === activeItem}
          onClick={onClickItem(item.path)}
        >
          {item.label}
        </ListItem>
      ))}
    </List>
  );
};
export const Menu: React.FC<MenuProps> = ({ items, onClickItem, active }) => {
  const [activeContainer, setActiveContainer] = useState<number | null>(null);

  const handleOpenContainer = (index: number) => {
    setActiveContainer((prev) => (prev === index ? null : index));
  };

  if (!items.length) return null;
  return items?.map((item: MenuItem, index) => {
    return (
      // <List isOpen key={index}>
      //   {item?.subMenu ? (
      //     <>
      //       <ListItem
      //         activeParent={item.subMenu.some(
      //           (item: MenuItem) => item.path === active
      //         )}
      //         onClick={() => handleOpenContainer(index)}
      //       >
      //         {item.label}
      //       </ListItem>
      //       <ItemSubMenus
      //         onClickItem={onClickItem}
      //         item={item}
      //         isOpen={activeContainer === index}
      //         activeItem={active}
      //       />
      //     </>
      //   ) : (
      //     <ListItem
      //       selected={item.path === active}
      //       onClick={onClickItem(item.path)}
      //     >
      //       {item.label}
      //     </ListItem>
      //   )}
      // </List>
      <ul className="menus">
        {items.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    );
  });
};

const MenuItems = ({ items, depthLevel }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>();

  // useEffect(() => {
  //   useEffect(() => {
  //     const handler = (event: any) => {
  //       if (isOpen && ref.current && !ref.current.contains(event.target)) {
  //         setIsOpen(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handler);
  //     document.addEventListener("touchstart", handler);
  //     return () => {
  //       // Cleanup the event listener
  //       document.removeEventListener("mousedown", handler);
  //       document.removeEventListener("touchstart", handler);
  //     };
  //   }, [isOpen]);
  // }, []);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setIsOpen(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setIsOpen(false);
  };

  const closeDropdown = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.path && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.label
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            isOpen={isOpen}
          />
        </>
      ) : !items.path && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {items.label}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            isOpen={isOpen}
          />
        </>
      ) : (
        <span>{items.label}</span>
      )}
    </li>
  );
};
const Dropdown = ({ submenus, isOpen, depthLevel }: any) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${isOpen ? "show" : ""}`}>
      {submenus.map((submenu: MenuItem[], index: number) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
