import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiOutlineHome />,
  },
  {
    title: "Cadastrar",
    path: "/cadastrar",
    icon: <AiIcons.AiOutlineUserAdd />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Administrador",
        path: "/cadastrar/admin",
        icon: <RiIcons.RiAdminLine />,
      },
    ],
  },
];
