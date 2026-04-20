import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Portfolio Name / Logo */}
      <h2 className="logo">Nayanasakhi's Protfolio</h2>

      <div>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;