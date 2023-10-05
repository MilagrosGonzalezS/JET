import { useForm } from "react-hook-form";
import { saveData } from "../services/form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const onSubmit = async (data, event) => {
    event.preventDefault();

    if (!emailPattern.test(data.email)) {
      // Display an error message for an invalid email
      toast.error("Por favor ingresa un email válido");
      return; // Exit the function if the email is invalid
    }

    try {
      console.log(data); // Log the form data
      await saveData(data); // Call your saveData function with the form data
      emailjs
        .sendForm(
          "service_gqvs9bm",
          "template_mg2cdfl",
          event.target,
          "LQj_iypwA4sHS20qP"
        )
        .then((res) => {
          toast.success("Gracias! Nos comunicaremos a la brevedad");
          console.log(res);
        });
      // Show success toast if saveData succeeds

      reset(); // Reset the form
    } catch (error) {
      // Show error toast if there's an error in saveData
      toast.error(
        "Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label className="text-xs huge:text-base font-bold tracking-widest ">
        NAME
      </label>
      <br></br>
      <input
        className="bg-transparent p-2 border-b-2 border-b-accent w-full font-bold tracking-widest mb-6"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-sm huge:text-base font-bold text-red-800 block text-right">
          Campo obligatorio
        </span>
      )}
      <br></br>
      {/* include validation with required or other standard HTML validation rules */}
      <label className="text-xs huge:text-base font-bold tracking-widest">
        EMAIL
      </label>
      <br></br>
      <input
        className="bg-transparent p-2 border-b-2 border-b-accent w-full font-bold tracking-widest mb-6"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-sm huge:text-base font-bold text-red-800 block text-right">
          Campo obligatorio
        </span>
      )}
      <br></br>
      <label className="text-xs font-bold huge:text-base tracking-widest">
        MESSAGE
      </label>
      <br></br>
      <textarea
        className="bg-transparent p-2 border-b-2 border-b-accent w-full font-bold tracking-widest mb-6"
        {...register("message", { required: true })}
      />
      {errors.message && (
        <span className="text-sm huge:text-base font-bold text-red-800 block text-right">
          Campo obligatorio
        </span>
      )}
      <br></br>
      {/* errors will return when field validation fails  */}

      <input
        className="transition hover:bg-hover block mx-auto mt-4 bg-accent text-white py-2 px-10 text-xs huge:text-base tracking-widest cursor-pointer"
        type="submit"
        value="CONTACT US"
      />
      <Toaster position="bottom-center" />
    </form>
  );
}
