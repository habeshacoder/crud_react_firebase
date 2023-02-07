import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "rebass";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(120, 120, 120)" }}
      >
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          <Text> Home</Text>
        </NavLink>

        <NavLink to="/add" className="btn" style={{ color: "white" }}>
          <Text>Add</Text>
        </NavLink>
        <NavLink to="/about" className="btn" style={{ color: "white" }}>
          <Text>About</Text>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
