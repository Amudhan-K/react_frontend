import React from "react";
import "./SideNav.css"; // Import CSS for styling
import navItems from "./navItems.json"; // Import the JSON file

const SideNav = () => {
  return (
    <div className="side-nav">
       <div style={{ height: '90vh', overflow: 'auto' }}>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default SideNav;
