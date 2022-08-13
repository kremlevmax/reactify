import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./SidebarButton.css";

const SidebarButton = ({ title, to, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const btnClassName = isActive
    ? "sidebar-button__button active"
    : "sidebar-button__button";
  return (
    <Link to={to}>
      <div className={btnClassName}>
        <IconContext.Provider
          value={{ size: "24px", clasName: "sidebar-button__icon" }}
        >
          {icon}
          <p className='sidebar-button__title'>{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
