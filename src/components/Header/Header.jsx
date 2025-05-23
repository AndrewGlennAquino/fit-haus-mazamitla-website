import { useState } from "react";

import "./Header.css";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

function Header() {
  const [clicked, setClicked] = useState(false);

  // Function that handles hamburger menu click
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header className="header-container">
        <h1>Fit Haus</h1>

        <nav className="monitor-nav-container">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#hours">Example 1</a>
            </li>
            <li>
              <a href="#rates">Example 2</a>
            </li>
            <li>
              <a href="#offers">Example 3</a>
            </li>
            <li>
              <a href="#footer">Socials</a>
            </li>
          </ul>
        </nav>

        <button className="menu-nav-button" onClick={handleClick}>
          <img src={clicked ? close : menu} />
        </button>
      </header>

      <nav
        className={clicked ? "menu-nav-container show" : "menu-nav-container"}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#hours">Example 1</a>
          </li>
          <li>
            <a href="#rates">Example 2</a>
          </li>
          <li>
            <a href="#offers">Example 3</a>
          </li>
          <li>
            <a href="#footer">Socials</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
