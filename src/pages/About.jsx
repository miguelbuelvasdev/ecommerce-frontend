import React from 'react';
import { 
  FiTarget, 
  FiHeart, 
  FiAward, 
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiPackage
} from 'react-icons/fi';

const About = () => {
  // Valores de la empresa - escalable
  const companyValues = [
    {
      icon: FiHeart,
      title: 'Pasión por el Cliente',
      description: 'Tu satisfacción es nuestra prioridad número uno. Trabajamos incansablemente para superar tus expectativas.'
    },
    {
      icon: FiShield,
      title: 'Confianza y Seguridad',
      description: 'Garantizamos transacciones seguras y protegemos tu información personal con los más altos estándares.'
    },
    {
      icon: FiAward,
      title: 'Calidad Garantizada',
      description: 'Solo trabajamos con las mejores marcas y productos que han pasado rigurosos controles de calidad.'
    },
    {
      icon: FiGlobe,
      title: 'Alcance Global',
      description: 'Enviamos a todo el mundo para que puedas disfrutar de nuestros productos sin importar dónde estés.'
    }
  ];

  // Estadísticas de la empresa
  const stats = [
    { number: '50K+', label: 'Clientes Satisfechos' },
    { number: '10K+', label: 'Productos Disponibles' },
    { number: '98%', label: 'Satisfacción del Cliente' },
    { number: '24/7', label: 'Soporte Disponible' }
  ];

  // Miembros del equipo
  const teamMembers = [
    {
      name: 'Ana García',
      position: 'CEO & Fundadora',
      image: '../src/assets/ana.webp',
      description: 'Visionaria con más de 15 años de experiencia en e-commerce.'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Tecnología',
      image: '../src/assets/carlos.webp',
      description: 'Experto en innovación tecnológica y desarrollo de plataformas.'
    },
    {
      name: 'María López',
      position: 'Directora de Marketing',
      image: '../src/assets/maria.webp',
      description: 'Especialista en estrategias digitales y experiencia del cliente.'
    },
    {
      name: 'Juan Martínez',
      position: 'Director de Operaciones',
      image: '../src/assets/juan.webp',
      description: 'Líder en logística y optimización de procesos empresariales.'
    }
  ];

  // Timeline de la empresa - Más profesional
  const milestones = [
    {
      year: '2018',
      title: 'Fundación de la Empresa',
      description: 'Establecimiento de nuestra sede principal con un equipo fundador de 5 profesionales especializados en tecnología y comercio electrónico. Desarrollo de la primera versión de nuestra plataforma digital con enfoque en experiencia de usuario y seguridad transaccional.'
    },
    {
      year: '2019',
      title: 'Expansión de Infraestructura',
      description: 'Inauguración de nuestro primer centro de distribución automatizado de 5,000 m², implementación de sistemas de gestión de inventario en tiempo real y establecimiento de alianzas estratégicas con más de 50 proveedores certificados a nivel nacional.'
    },
    {
      year: '2021',
      title: 'Internacionalización Estratégica',
      description: 'Lanzamiento de operaciones internacionales con cobertura inicial en 20 países de América Latina y Europa. Implementación de sistemas de logística multimodal y obtención de certificaciones ISO 9001 para gestión de calidad y ISO 27001 para seguridad de la información.'
    },
    {
      year: '2023',
      title: 'Transformación Digital Avanzada',
      description: 'Lanzamiento de nuestra aplicación móvil nativa con tecnología de inteligencia artificial para recomendaciones personalizadas. Implementación de sistemas de realidad aumentada para visualización de productos y integración de blockchain para trazabilidad de envíos.'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Nuestra Historia
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
                Más que una tienda online, somos tu aliado en cada compra. 
                Conoce la pasión que nos impulsa a ofrecerte lo mejor cada día.
              </p>
            </div>
          </div>
        </div>
        
        {/* Wave SVG - Responsive */}
        <div className="absolute -bottom-px left-0 right-0 overflow-hidden">
          <svg
            className="block w-full h-12 sm:h-16 md:h-20 lg:h-24"
            viewBox="0 0 1440 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V121H1380C1320 121 1200 121 1080 121C960 121 840 121 720 121C600 121 480 121 360 121C240 121 120 121 60 121H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Misión */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    <FiTarget className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                    Nuestra Misión
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Democratizar el acceso a productos de calidad, brindando una experiencia 
                  de compra online excepcional, con precios justos y un servicio al cliente 
                  que supere todas las expectativas.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                    <FiTrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                    Nuestra Visión
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Ser la plataforma de e-commerce líder en innovación y confianza, 
                  reconocida por transformar la manera en que las personas compran online, 
                  creando conexiones significativas entre productos y personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Números que Hablan por Nosotros
            </h2>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Resultados que demuestran nuestro compromiso con la excelencia
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores de la Empresa */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              Los principios fundamentales que guían cada decisión y acción en nuestra empresa
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Nuestro Camino
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              Un recorrido de crecimiento, innovación y compromiso con nuestros clientes
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-8 sm:mb-12 lg:mb-16 last:mb-0 group">
                {/* Timeline line - Hidden on last item */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-6 sm:left-8 lg:left-10 top-12 sm:top-16 lg:top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
                )}
                
                {/* Timeline indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-4 sm:ml-6 lg:ml-8 flex-grow">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm lg:text-base font-semibold mb-3 sm:mb-0 sm:mr-6 self-start">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Detrás de cada gran empresa hay un equipo excepcional. Conoce a las personas 
              que trabajan día a día para hacer tu experiencia inolvidable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 h-full">
                  <div className="relative overflow-hidden">
                    <div className="aspect-w-4 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        src={member.image}
                        alt={`Retrato profesional de ${member.name}, ${member.position} de la empresa`}
                        className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        style={{ objectPosition: 'center 15%' }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
              ¿Listo para Unirte a Nuestra Historia?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Descubre por qué miles de clientes confían en nosotros cada día y forma parte de nuestra comunidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
              <a
                href="/products"
                className="group bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Explorar Productos</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/contact"
                className="group border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-block text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Contáctanos</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/5 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
