import "./Footer.css";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import mail from "../../assets/icons/mail.svg";

function Footer() {
  return (
    <>
      <footer className="footer-container" id="footer">
        <ul>
          <li>
            <a href="#">
              <img src={instagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={mail} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
