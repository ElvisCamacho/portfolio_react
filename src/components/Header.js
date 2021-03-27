import { Link } from "react-router-dom";
import "../Header.css";
import React from "react";
 function Header() {
  return (
    <div className="header">
      <div className="header_nav">
        <Link to="/">
          <div className="header_option">
            <h4 className="">Home</h4>
          </div>
        </Link>

        <Link to="/about">
          <div className="header_option">
            <h4 className="">About</h4>
          </div>
        </Link>
        <Link to="/Work">
          <div className="header_option">
            <h4 className="">Work</h4>
          </div>
        </Link>
        <Link to="/Education">
          <div className="header_option">
            <h4 className="">Education</h4>
          </div>
        </Link>
        <Link to="/Skills">
          <div className="header_option">
            <h4 className="">Skills</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
