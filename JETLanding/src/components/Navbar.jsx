import MenuLink from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <ul className="flex flex-col justify-center md:flex-row">
        <MenuLink title="HOME" href="#home" />
        <MenuLink title="ABOUT US" href="#about" />
        <MenuLink title="CONTACT" href="#contact" />
        <li className="items-center justify-start my-4 mx-4 huge:mx-12 huge:text-2xl">
          <a
            href="https://www.instagram.com/jetbuenosaires/"
            target="_blank"
            rel="noreferrer"
            aria-controls="drawer-right-example"
            className="relative group"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#2b2b2b" }} />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </>
  );
}
