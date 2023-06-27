import React, { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [sidebar, setSideBar] = useState(false);
  return (
    <>
      <div
        className={`${
          sidebar ? "w-60" : "w-20"
        } h-auto p-5 pt-8 bg-slate-900 rounded-br-lg`}
        onMouseEnter={() => setSideBar(true)}
        onMouseLeave={() => setSideBar(false)}
      >
        <div className="pt-6">
          {SidebarItem.map((item, index) => {
            return (
              <div
                className="text-gray-300 text-2xl
              gap-x-2 cursor-pointer flex-auto mr-40 
              "
                key={index}
              >
                <Link to={item.path} className="flex no-underline">
                  <i className="w-48 min-w-full h-12 p-1 sticky items-center">
                    {item.icon}
                  </i>

                  <div
                    className={`${!sidebar && "hidden"} 
                     font-mono capitalize`}
                  >
                    {item.title}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
