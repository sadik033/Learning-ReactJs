import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu  */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className="menuItem">
              {item.icon}
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
