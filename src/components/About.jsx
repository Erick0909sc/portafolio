"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Erick from "@/assets/ERICK.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
        {/* Imagen con animación */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image className="w-full h-full object-cover" src={Erick} />
        </motion.div>

        {/* Texto con animación */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mí</h2>
          <p className="text-lg text-gray-600 mb-4">
            Soy <span className="text-blue-500 font-semibold">Erick Inga Calle</span>, un desarrollador web apasionado por la tecnología.
          </p>
          <p className="text-lg text-gray-600">
            "Estudié y me gradué como Técnico en Ingeniería de Software con IA
            en el Instituto SENATI. Tengo experiencia en{" "}
            <span className="text-blue-500 font-semibold">Next.js</span>,{" "}
            <span className="text-blue-500 font-semibold">React</span> y{" "}
            <span className="text-blue-500 font-semibold">Tailwind CSS</span>.
            Actualmente, estoy enfocado en mejorar mis habilidades y explorar
            nuevas tecnologías.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
