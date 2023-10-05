import square from "../assets/imgs/square.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div
      className="about bg-cover bg-center bg-no-repeat min-h-80vh"
      id="about"
    >
      {/* <div className="w-full bg-light py-6 px-4">
        <a
          href="https://www.instagram.com/jetbuenosaires/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-4 justify-center"
        >
          <div className="">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#424242", fontSize: "45px" }}
            />
          </div>
          <div className="font-accent text-dark">
            <p className="text-xs">SEGUINOS EN INSTAGRAM</p>
            <p className="text-base sm:text-lg tracking-widest">
              @JETBUENOSAIRES
            </p>
          </div>
        </a>
      </div> */}
      <div className="flex-column-reverse md:flex justify-evenly items-center gap-8 mt-24 mb-24">
        <div className="w-4/5 sm:w-2/4 md:w-96 huge:w-1/4 p-12 mx-auto md:mx-0">
          <img
            className="w-full animate-rotate"
            src={square}
            alt="3D pink square"
          />
        </div>
        <div className="w-full sm:w-2/3 huge:w-1/3 sm:m-auto md:m-4 lg:m-4 md:w-2/5 p-12 md:p-4 lg:p-8">
          <p className="text-xl huge:text-2xl font-bold pb-3">
            Con 20 años de trayectoria, JET se renueva para ofrecerte una
            experiencia única y vanguardista en el mundo del entretenimiento.
          </p>
          <p className="text-xl huge:text-2xl font-bold">
            En esta nueva etapa, JET fusiona la vanguardia, el arte, la música,
            la moda, la cultura y las tendencias para crear un espacio que va
            más allá del simple entretenimiento. Nos sumergimos en lo nuevo, lo
            fresco y lo emocionante que está sucediendo en el mundo, y lo
            traemos a nuestras pistas de baile y a nuestros espacios.
          </p>
        </div>
      </div>
      <hr
        size="16"
        width="50px"
        color="grey"
        className="mt-8 h-1 mx-auto my-36"
      ></hr>
    </div>
  );
}
