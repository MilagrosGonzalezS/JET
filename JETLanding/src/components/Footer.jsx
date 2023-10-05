import MenuLink from "./MenuLink";
import logo from "../assets/imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="py-6 px-4 huge:px-10 sm:px-8 flex justify-between items-center">
      <ul className="flex flex-col md:flex-row">
        <li className="flex items-center justify-left my-2 mx-4 huge:mx-12 huge:text-2xl">
          <a
            href="https://www.instagram.com/jetbuenosaires/"
            target="_blank"
            rel="noreferrer"
            className="relative group"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#2b2b2b" }} />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </li>
        <MenuLink title="HOME" href="#home" />
        <MenuLink title="ABOUT US" href="#about" />
        <MenuLink title="CONTACT" href="#contact" />
      </ul>
      <div className="w-14 huge:w-24 self-end m-2">
        <img className="w-full" src={logo} alt="Jet Logo" />
      </div>
    </footer>
  );
}
