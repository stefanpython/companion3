import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src="./security.png" alt="logo" />
        <span className="navbar-title">
          The <span className="color-title">Confidential</span> Companion
        </span>
      </div>

      <div className="navbar-right">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        <ul className="desktop-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/fees"}>Fees</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/testimonials"}>Testimonials</Link>
          </li>
        </ul>

        <ul
          className={`navbar-links ${showMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/fees"}>Fees</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/testimonials"}>Testimonials</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
