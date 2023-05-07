import React, { useState } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const data = [
    "Village Overview",
    "General Household Info",
    "Family Members Info",
    "Government Schemes",
    "Basic Amenities",
    "Land and Agriculture",
    "Other",
  ];
  const [element, setElement] = useState("Village Overview");
  return (
    <div className="sidebar">
      <div className="sidebarLogo">
        <a href="https://heritians.vercel.app/">
          <img
            src={require("../../../assets/images/dashboardLogo.png")}
            alt="logo"
          />
        </a>
      </div>
      <div className="sidebarMenus">
        <ul>
          {data.map((elem, index) => {
            return (
              <li
                className={elem === element ? "listActive" : "sidebarMenusList"}
                onClick={() => setElement(elem)}
                key={index}
              >
                {elem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
