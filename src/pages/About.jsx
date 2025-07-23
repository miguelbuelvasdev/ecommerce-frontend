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
      image: 'https://placehold.co/300x300',
      description: 'Visionaria con más de 15 años de experiencia en e-commerce.'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Tecnología',
      image: 'https://placehold.co/300x300',
      description: 'Experto en innovación tecnológica y desarrollo de plataformas.'
    },
    {
      name: 'María López',
      position: 'Directora de Marketing',
      image: 'https://placehold.co/300x300',
      description: 'Especialista en estrategias digitales y experiencia del cliente.'
    },
    {
      name: 'Juan Martínez',
      position: 'Director de Operaciones',
      image: 'https://placehold.co/300x300',
      description: 'Líder en logística y optimización de procesos empresariales.'
    }
  ];

  // Timeline de la empresa
  const milestones = [
    {
      year: '2018',
      title: 'El Comienzo',
      description: 'Iniciamos con una pequeña oficina y grandes sueños.'
    },
    {
      year: '2019',
      title: 'Primera Expansión',
      description: 'Abrimos nuestro primer centro de distribución.'
    },
    {
      year: '2021',
      title: 'Crecimiento Internacional',
      description: 'Comenzamos a enviar productos a más de 20 países.'
    },
    {
      year: '2023',
      title: 'Innovación Continua',
      description: 'Lanzamos nuestra app móvil y mejoramos la experiencia de compra.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Nuestra Historia
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Más que una tienda online, somos tu aliado en cada compra. 
              Conoce la pasión que nos impulsa a ofrecerte lo mejor cada día.
            </p>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute -bottom-px left-0 right-0 overflow-hidden">
          <svg
            className="block w-full"
            viewBox="0 0 1440 121"
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

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Misión */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FiTarget className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Nuestra Misión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Democratizar el acceso a productos de calidad, brindando una experiencia 
                de compra online excepcional, con precios justos y un servicio al cliente 
                que supere todas las expectativas.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <FiTrendingUp className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Nuestra Visión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser la plataforma de e-commerce líder en innovación y confianza, 
                reconocida por transformar la manera en que las personas compran online, 
                creando conexiones significativas entre productos y personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Números que Hablan por Nosotros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores de la Empresa */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestro Camino
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4 pb-8 border-l-2 border-gray-200 pl-4 flex-grow">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {milestone.year} - {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Detrás de cada gran empresa hay un equipo excepcional. Conoce a las personas 
            que trabajan día a día para hacer tu experiencia inolvidable.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Retrato profesional de ${member.name}, ${member.position} de la empresa, con expresión amigable y profesional`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Unirte a Nuestra Historia?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Descubre por qué miles de clientes confían en nosotros cada día
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Explorar Productos
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
