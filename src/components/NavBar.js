import { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
// import styles from "./navbar.modules.css";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handelToggle}>
            <FaAlignRight className="nav__icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
