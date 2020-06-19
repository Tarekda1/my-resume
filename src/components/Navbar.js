import React from "react";
import logo from "../assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import PageLinks from "../constants/links";
import { Link } from "gatsby";
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            onClick={() => toggleSidebar()}
            className="toggle-btn"
          >
            <FiMenu />
          </button>
          <Link className="base-title logo" to="/">
            Tarek
          </Link>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  );
};

export default Navbar;
