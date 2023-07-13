import { Flex } from "../Flex";
import React, { useEffect, useRef, useState } from "react";
import {
  DropdownProps,
  MenuItem,
  MenuItemsProps,
  MenuProps,
} from "./Menu.types";
import { styled } from "styled-components";
// import "./menuStyle.css";
const ListItem = styled.li<{ active: boolean; submenu?: boolean }>`
  ${({ active, submenu = false }) =>
    active && submenu
      ? `
  background-color: #f2f2f2;


`
      : `
        
   
       `}
  cursor: pointer;
  padding: 5px;
`;
const List = styled.ul<{ active?: boolean }>`
  list-style: none;
  padding: 0px;
  margin: 0px;
  > li ul li {
    ${({ active }) =>
      active
        ? `
   border :1px solid red;
   color:blue;
   
   `
        : ``}
  }
`;

export const Menu: React.FC<any> = ({ items }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<number | null>(null);
  const handleToggleTab = (tab: string) => () => {
    console.log(tab, activeTab);
    if (activeTab === tab) {
      return setActiveTab(null);
    }
    setActiveTab(tab);
  };
  const handleToggleSubTab = (subTab: number) => () => {
    setActiveSubTab(subTab);
  };

  return (
    <List>
      {menuItems?.map((item: any, index) => {
        console.log(index);
        return item.submenu ? (
          <ListItem
            active={item?.submenu?.some((it: any) => it.title === activeSubTab)}
            key={index}
          >
            <span onClick={handleToggleTab(item.title)}>{item.title}</span>{" "}
            <List
              className="menu-items"
              style={{
                marginLeft: 10,
                display: item?.title === activeTab ? "block" : "none",
              }}
            >
              {item?.submenu?.map((subItem: any, index: number) => (
                <ListItem submenu active={subItem.title === activeSubTab}>
                  <span
                    // href="/#"
                    // style={{ color: activePath ? "red" : "black" }}
                    onClick={(e: any) => {
                      e.preventDefault();
                      if (activeSubTab === subItem.title) {
                        return;
                      }
                      setActiveSubTab(subItem.title);
                    }}
                  >
                    {" "}
                    {subItem.title}{" "}
                  </span>
                </ListItem>
              ))}{" "}
            </List>
          </ListItem>
        ) : (
          <ListItem
            submenu
            active={activeTab === item.title && activeSubTab === item.title}
            onClick={(e: any) => {
              setActiveTab(item.title);
              setActiveSubTab(item.title);
            }}
          >
            {" "}
            {item.title}{" "}
          </ListItem>
        );
      })}
    </List>
  );
};
