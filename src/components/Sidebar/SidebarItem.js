import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarItem = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    contextName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <IoIcons.IoIosSearch />,
    contextName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoMdPerson />,
    contextName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <FaIcons.FaFire />,
    contextName: "nav-text",
  },
  {
    title: "Chats",
    path: "/chats",
    icon: <IoIcons.IoIosChatbubbles />,
    contextName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaIcons.FaCogs />,
    contextName: "nav-text",
  },
];
