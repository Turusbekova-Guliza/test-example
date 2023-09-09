import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="nav">
        <ul className="ul-header">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/weather">Weather</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
