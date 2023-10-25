import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./SubMenu.module.css";

const SideBarLink = styled(Link)`
  color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  text-decoration: none;
  height: 3.75rem;
  list-style: none;
  font-size: 1.25rem;

  &:hover {
    background: #252831;
    border-left: 0.25rem solid #632ce4;
    cursor: pointer;
  }
`;

const DropDownLink = styled(Link)`
  background: #414757;
  height: 3.75rem;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 1.25rem;

  &:hover {
    background-color: #632ce4;
    cursor: pointer;
  }
`;

const SideBarLabel = styled.span`
  margin-left: 1rem;
  color: antiquewhite;
`;

export default function SubMenu({ item }) {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);

  return (
    <div>
      <SideBarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SideBarLabel>{item.title}</SideBarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconClosed
            : item.subNav
            ? item.iconOpened
            : null}
        </div>
      </SideBarLink>
      {subNav &&
        item.subNav.map((item, index) => {
          {
            console.log(item.title);
          }
          return (
            <DropDownLink to={item.path} key={index}>
              {item.icon}
              <SideBarLabel>{item.title}</SideBarLabel>
            </DropDownLink>
          );
        })}
    </div>
  );
}
