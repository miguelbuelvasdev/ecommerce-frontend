import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contenido del Hero */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Descubre las Mejores Ofertas
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Encuentra todo lo que necesitas con los mejores precios y la mejor calidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Ver Productos
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Conoce Más
              </button>
            </div>
          </div>

          {/* Imagen del Hero */}
          <div className="hidden md:block">
            <img
              src="../src/assets/collage.webp"
              alt="Collage de productos electrónicos modernos incluyendo smartphones, laptops y auriculares sobre fondo minimalista"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Patrón decorativo */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden">
        <svg
          className="block w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V121H1380C1320 121 1200 121 1080 121C960 121 840 121 720 121C600 121 480 121 360 121C240 121 120 121 60 121H0Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
