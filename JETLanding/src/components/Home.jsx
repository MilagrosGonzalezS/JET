import Navbar from "./Navbar";
import logo from "../assets/imgs/logo.png";
import ball from "../assets/imgs/ball.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="min-h-screen px-2 mb-8 relative" id="home">
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white bg-cover bg-no-repeat w-80"
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-800 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="w-full">
            <Navbar />
          </div>
        </div>

        <nav className="py-6 px-4 huge:px-10 sm:px-8 flex flex-wrap justify-between items-center">
          <div className="w-14 huge:w-24">
            <img className="w-full" src={logo} alt="Jet Logo" />
          </div>
          <div className="hidden md:flex">
            <Navbar />
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-500 md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              type="button"
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </nav>
        <div className="flex flex-col items-center justify-center">
          <div className="w-4/5 sm:w-72 lg:w-96 huge:w-1/4 my-12 huge:my-24 sm:my-6 px-4">
            <img
              className="w-full animate-float"
              src={ball}
              alt="modern pink 3D ball with texture"
            />
          </div>
          <h1 className="font-accent text-2xl huge:text-5xl text-accent mt-8 mb-4 sm:mt-4">
            THE NEW ERA
          </h1>
          <hr
            size="16 huge:20"
            width="50px"
            color="grey"
            className="mt-12 sm:m-8 huge:mt-12 huge:mb-24 h-1"
          ></hr>
        </div>
        <a
          href="https://www.instagram.com/jetbuenosaires/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#f5f5f5" }}
            className="fixed text-3xl md:text-4xl huge:text-5xl right-6 md:right-16 huge:right-24 bottom-7 md:bottom-16 huge:bottom-32 bg-accent rounded-full p-4 huge:p-6 hover:bg-hover"
          />
        </a>
      </div>
    </>
  );
}
