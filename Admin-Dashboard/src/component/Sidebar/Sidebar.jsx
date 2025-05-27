import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0)
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
            <div className={selected===index?'menuItem active': 'menuItem'} 
            key={index}>
              
              {item.icon}
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <i class="ri-arrow-right-circle-line"></i>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
