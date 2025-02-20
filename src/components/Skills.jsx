"use client";
import React from "react";
import { motion } from "framer-motion";
import data from "@/data/info";
import Image from "next/image";

const Skills = () => {
  const { skills } = data;
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Manejo estas tecnologías
      </h2>

      <p className="text-lg mb-8 text-center">
        Aquí están algunas de las tecnologías con las que trabajo.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
        {skills?.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-3 hover:scale-110 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-transparent p-4 rounded-md">
              <Image
                src={skill.imagen}
                alt={skill.nombre}
                width={64}
                height={64}
                className="object-contain rounded-md"
              />
            </div>
            <p className="text-lg font-semibold">{skill.nombre}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
