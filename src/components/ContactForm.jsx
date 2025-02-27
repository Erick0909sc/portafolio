import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Linkedin, Github } from "lucide-react"; // Importar iconos

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Mínimo 3 caracteres")
      .required("Nombre requerido"),
    email: Yup.string().email("Email inválido").required("Email requerido"),
    message: Yup.string()
      .min(10, "Mínimo 10 caracteres")
      .required("Mensaje requerido"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Mensaje enviado con éxito!");
        resetForm();
      } else {
        toast.error("Error: " + data.error);
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje.");
    }
  };

  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-12 bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-white mb-6 text-center animate-fadeIn">
        Contáctame
      </h2>
      <p className="text-gray-100 text-justify text-lg max-w-2xl mb-10 animate-fadeIn">
        Si estás buscando un programador con habilidades tanto en frontend como
        en backend, confiable y con ganas de demostrar su potencial, estoy aquí
        para ayudarte. Me caracterizo por mi capacidad de escucha, aprendizaje
        continuo y mejora constante, siempre enfocado en ofrecer soluciones
        efectivas y bien estructuradas. Estoy listo para enfrentar nuevos
        desafíos y aportar valor a tus proyectos con creatividad, eficiencia y
        compromiso. ¡Espero hablar contigo pronto!
      </p>

      <div className="w-full lg:w-3/4 px-6 sm:px-12 py-12 bg-gray-100 rounded-lg shadow-lg animate-fadeIn">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Nombre Completo
                </label>
                <Field
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  name="name"
                  placeholder="Tu nombre"
                  type="text"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">
                  Email
                </label>
                <Field
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  name="email"
                  placeholder="Tu email"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">
                  Mensaje
                </label>
                <Field
                  as="textarea"
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  rows="4"
                  name="message"
                  placeholder="Tu mensaje"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                className="w-full bg-blue-600 text-gray-100 py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {/* Íconos de redes sociales dentro de la sección */}
      <div className="w-full flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/erick-inga-calle/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://github.com/Erick0909sc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300"
        >
          <Github size={32} />
        </a>
      </div>
    </section>
  );
}
