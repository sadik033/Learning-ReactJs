import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";

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
        <div className="menuItem">
          <div>
            <i class="ri-home-3-line"></i>
          </div>
          <span>Dashboard</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
