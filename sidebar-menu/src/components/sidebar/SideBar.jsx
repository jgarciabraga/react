import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import styles from "./SideBar.module.css";
import { SideBarData } from "./SideBaraData";
import SubMenu from "../submenu/SubMenu";

const Nav = styled.div`
  background-color: #15171c;
  width: 100vw;
  top: 0;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavIcon = styled(Link)`
  background-color: red;
  color: antiquewhite;
  font-size: 2rem;
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  align-items: center;
  padding-left: 2rem;
`;

const SideBarNav = styled.nav`
  background-color: #15171c;
  width: 15rem;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 500ms;
  z-index: 10;
`;

const SideBarWrap = styled.div`
  width: 100%;
`;

export default function SideBar() {
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  return (
    <div>
      <Nav>
        <NavIcon onClick={showSideBar}>
          <GiIcons.GiHamburgerMenu />
        </NavIcon>
      </Nav>
      <SideBarNav sidebar={sidebar}>
        <SideBarWrap>
          <NavIcon>
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          </NavIcon>
          {SideBarData.map((item, index) => {
            console.log(item.title);
            return <SubMenu item={item} key={index} />;
          })}
        </SideBarWrap>
      </SideBarNav>
    </div>
  );
}
