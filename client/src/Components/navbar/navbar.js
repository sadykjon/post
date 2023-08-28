import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <h2>Logo</h2>
          <ul className="menu">
            <li><Link className="link" to="/"> Home </Link></li> 
            <li><Link  className="link" to="post"> Post </Link></li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
