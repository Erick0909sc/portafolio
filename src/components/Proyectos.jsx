"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import data from "@/data/info";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyectos = () => {
  const { proyects } = data;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="proyectos" className="min-h-screen bg-gray-100 text-black py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Mis Proyectos</h2>
      <p className="text-lg mb-8 text-center text-gray-950">
        Aquí algunos de los proyectos que he creado.
      </p>

      <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
        {proyects?.map((project, index) => (
          <motion.div
            key={index}
            className="w-full mx-auto flex flex-col lg:flex-row bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Slider de imágenes */}
            <div className="relative w-full lg:w-1/3 h-80 overflow-hidden">
              <Slider {...sliderSettings}>
                {project.imagenes.map((image, idx) => (
                  <div key={idx} className="h-80 w-full relative">
                    <Image
                      src={image}
                      alt={project.nombre}
                      layout="fill"
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Contenido de la card */}
            <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
              <h5 className="text-3xl font-bold text-gray-900">{project.nombre}</h5>
              <p className="text-lg text-gray-700 mt-2">{project.descripcion}</p>
              <div className="flex justify-start space-x-4 mt-4">
                {project.Repositorio && (
                  <a href={project.Repositorio} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    Repositorio
                  </a>
                )}
                {project.Proyecto && (
                  <a href={project.Proyecto} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    Ver Proyecto
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
