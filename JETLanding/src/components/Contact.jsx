import Form from "./Form.jsx";
import spheres from "../assets/imgs/spheres.png";

export default function Contact() {
  return (
    <div id="contact">
      <div className="flex-column sm:flex justify-evenly mt-12 mb-24 sm:my-12 px-10 sm:px-0">
        <div className="w-full sm:w-1/3">
          <div className="mb-12">
            {/* <h3 className="subtitle font-accent text-dark text-sm huge:text-lg tracking-widest">
              LET THE STORY
            </h3> */}
            <h4 className="font-accent text-5xl huge:text-6xl text-accent">
              EVENTS
            </h4>
          </div>
          <Form />
        </div>
        <div className="w-1/5 self-center hidden sm:block">
          <img
            className="w-full animate-slide"
            src={spheres}
            alt="One and a half 3D pink spheres"
          />
        </div>
      </div>
    </div>
  );
}
