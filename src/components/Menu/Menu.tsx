import { Flex } from "../Flex";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MenuItem, MenuProps } from "./Menu.types";
import { styled } from "styled-components";
// import "./menuStyle.css";
import { Link } from "react-router-dom";
const ListItem = styled.li.attrs((props) => ({
  className: props.className,
}))<{ selected?: boolean; activeParent?: boolean }>`
  cursor: pointer;

  &.menu-items {
    position: relative;
    font-size: 14px;

    a {
      display: block;
      font-size: inherit;
      color: inherit;
      text-decoration: none;
    }
    button {
      color: inherit;
      font-size: inherit;
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 100%;
    }
    a,
    button {
      text-align: left;
      padding: 0.7rem 1rem;
    }
    a:hover,
    button:hover {
      background-color: #f2f2f2;
    }
  }
`;
const List = styled.ul.attrs((props) => ({
  className: props.className,
}))<{ direction?: "row" | "column" }>`
s
  animation: all 3s fade-in;

  &.menus {
    display: flex;
    list-style: none;
    flex-direction: ${({ direction = "row" }) => direction};
  
     a,button {
    text-align: left;
    padding: 0.7rem 1rem;
  }
  }

  &.dropdown.dropdown-submenu {
    position: absolute;
    left: 100%;
    top: -7px;
  }

  &.dropdown {
    position: absolute;
    // right: 0;
    // left: auto;
    font-size: 0.875rem;
    min-width: 10rem;
    padding: 0.5rem 0;
    list-style: none;
    background-color: #fff;
    /* border-radius: 0.5rem; */
    display: none;
    z-index: 20000000;
  }
  &.dropdown.show {
    display: block;
  }
`;

export const Menu: React.FC<MenuProps> = ({ items, onClickItem, active }) => {
  const [activeContainer, setActiveContainer] = useState<number | null>(null);

  const handleOpenContainer = (index: number) => {
    setActiveContainer((prev) => (prev === index ? null : index));
  };

  return (
    <List className="menus" direction="row">
      {items.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </List>
  );
};

const MenuItems = ({ items, depthLevel }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>();

  useEffect(() => {
    const handler = (event: any) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        // setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isOpen, ref]);

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
    <ListItem
      className="menu-items"
      ref={ref}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {items.label}
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
            dropdown={isOpen}
          />
        </>
      ) : (
        <Link to={items.path}>{items.label} </Link>
      )}
    </ListItem>
  );
};
export const Dropdown = ({ submenus, dropdown, depthLevel }: any) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <List className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}
      {submenus.map((submenu: any, index: any) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </List>
  );
};
