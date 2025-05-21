import "./Header.css";
import menu from "../../assets/icons/menu.svg";

function Header() {
  return (
    <>
      <header className="header-container">
        <h1>Fit Haus</h1>

        <nav className="monitor-nav-container">
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </nav>

        <button className="menu-nav-container">
          <img src={menu}/>
        </button>
      </header>
    </>
  );
}

export default Header;
