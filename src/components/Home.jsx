"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Responsable", "Creativo", "Desarrollador", "Adaptable"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Cambia cada 2 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¡Hola, soy <span className="text-blue-400">Erick Ricardo !</span>
      </motion.h1>

      <motion.h2
        className="text-3xl font-semibold"
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.h2>

      <p className="text-lg text-gray-300 mt-4 max-w-xl">
        Profesional Técnico en Ingeniería de Software con IA, con habilidades
        técnicas y comunicativas. Busco aportar soluciones innovadoras y
        eficientes en programación, mientras continúo desarrollándome
        profesionalmente..{" "}
      </p>

      <motion.a
        href="#about"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Conoceme
      </motion.a>
    </section>
  );
}
