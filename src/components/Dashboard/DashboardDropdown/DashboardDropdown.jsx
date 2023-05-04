import React, { useState } from "react";
import "./DashboardDropdown.css";
import { BsFillCaretDownFill } from "react-icons/bs";
const villages = [
  "Lasudiya Khas",
  "Gawa Kheda",
  "Beda Khedi",
  "Mana Khedi",
  "Nipaniya Kalan",
];
const DashboardDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedVillage, setSelectedVillage] = useState("Select Village");
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = (village) => {
    setSelectedVillage(village);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdownBtn" onClick={handleOpen}>
        <h6>{selectedVillage}</h6>
        <BsFillCaretDownFill />
      </button>
      {open ? (
        <ul className="menu">
          {villages.map((village, index) => {
            return (
              <li key={index} className="menu-item">
                <button onClick={()=>handleMenu(village)}>{village}</button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default DashboardDropdown;
