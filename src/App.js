// App.js

import React from "react";
import NavBar from "./NavBar";

import Flow from "./Flow";

import SideNav from "./SideNav";
import "./App.css";
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className="navbar">
        <NavBar />
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <div
          className="side-nav"
          style={{ width: "250px", overflowY: "auto", zIndex: "2" }}
        >
          <SideNav />
        </div>

        <div id="react-flow-container" style={{ flex: 1 }}>
          <Flow />
        </div>
      </div>
    </div>
  );
};

export default App;
