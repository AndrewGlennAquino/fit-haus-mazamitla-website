import { useState } from "react";

import "./Header.css";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState("home");

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
            <li className={active === "home" ? "active" : ""}>
              <a href="#home" onClick={() => setActive("home")}>
                Home
              </a>
            </li>
            <li className={active === "example-1" ? "active" : ""}>
              <a href="#hours" onClick={() => setActive("example-1")}>
                Example 1
              </a>
            </li>
            <li className={active === "example-2" ? "active" : ""}>
              <a href="#rates" onClick={() => setActive("example-2")}>
                Example 2
              </a>
            </li>
            <li className={active === "example-3" ? "active" : ""}>
              <a href="#offers" onClick={() => setActive("example-3")}>
                Example 3
              </a>
            </li>
            <li className={active === "socials" ? "active" : ""}>
              <a href="#footer" onClick={() => setActive("socials")}>
                Socials
              </a>
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
          <li className={active === "home" ? "active" : ""}>
            <a
              href="#home"
              onClick={(e) => {
                handleClick(e);
                setActive("home");
              }}
            >
              Home
            </a>
          </li>
          <li className={active === "example-1" ? "active" : ""}>
            <a
              href="#hours"
              onClick={(e) => {
                handleClick(e);
                setActive("example-1");
              }}
            >
              Example 1
            </a>
          </li>
          <li className={active === "example-2" ? "active" : ""}>
            <a
              href="#rates"
              onClick={(e) => {
                handleClick(e);
                setActive("example-2");
              }}
            >
              Example 2
            </a>
          </li>
          <li className={active === "example-3" ? "active" : ""}>
            <a
              href="#offers"
              onClick={(e) => {
                handleClick(e);
                setActive("example-3");
              }}
            >
              Example 3
            </a>
          </li>
          <li className={active === "socials" ? "active" : ""}>
            <a
              href="#footer"
              onClick={(e) => {
                handleClick(e);
                setActive("socials");
              }}
            >
              Socials
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
