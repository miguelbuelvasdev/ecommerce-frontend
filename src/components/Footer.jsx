import React from 'react';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend
} from 'react-icons/fi';

const Footer = () => {
  // Enlaces rápidos - escalable
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Productos', href: '/products' },
    { name: 'Contacto', href: '/contact' }
  ];

  // Categorías de productos - escalable
  const categories = [
    { name: 'Audio', href: '/category/audio' },
    { name: 'Periféricos', href: '/category/perifericos' },
    { name: 'Monitores', href: '/category/monitores' },
    { name: 'Wearables', href: '/category/wearables' },
    { name: 'Gaming', href: '/category/gaming' },
    { name: 'Almacenamiento', href: '/category/almacenamiento' }
  ];

  // Información de ayuda - escalable
  const helpLinks = [
    { name: 'Centro de Ayuda', href: '/help' },
    { name: 'Envíos y Devoluciones', href: '/shipping' },
    { name: 'Términos y Condiciones', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Garantías', href: '/warranty' },
    { name: 'FAQ', href: '/faq' }
  ];

  // Redes sociales - escalable
  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://miguelbuelvasdev.com/', color: 'hover:text-blue-500 hover:bg-blue-500/10' },
    { name: 'Twitter', icon: FiTwitter, href: 'https://miguelbuelvasdev.com/', color: 'hover:text-sky-400 hover:bg-sky-400/10' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://miguelbuelvasdev.com/', color: 'hover:text-pink-500 hover:bg-pink-500/10' },
    { name: 'Youtube', icon: FiYoutube, href: 'https://miguelbuelvasdev.com/', color: 'hover:text-red-500 hover:bg-red-500/10' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Sección Principal del Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Información de la empresa */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <a href="/" className="inline-block mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                <span className="text-blue-500">Tech</span>Tronic
              </h2>
            </a>
            <p className="mb-6 sm:mb-8 text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg max-w-md mx-auto sm:mx-0">
              Tu tienda online de confianza. Ofrecemos los mejores productos 
              con la mejor calidad y precios competitivos. Tu satisfacción es 
              nuestra prioridad.
            </p>
            
            {/* Información de contacto */}
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="tel:+573009016173" 
                className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <span className="text-sm sm:text-base">+57 300 901 6173</span>
              </a>
              <a 
                href="mailto:contacto@miguelbuelvasdev.com" 
                className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <span className="text-sm sm:text-base">contacto@miguelbuelvasdev.com</span>
              </a>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-400">
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <span className="text-sm sm:text-base">El Carmen de Bolívar, Colombia</span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base group relative"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-blue-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">
              Categorías
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base group relative"
                  >
                    <span className="relative z-10">{category.name}</span>
                    <span className="absolute inset-0 bg-blue-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda y Soporte */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-lg sm:text-xl">
              Ayuda y Soporte
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base group relative"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-blue-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <hr className="my-8 sm:my-12 lg:my-16 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Copyright */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-gray-400 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} TechTronic. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Desarrollado con ❤️ por Miguel Buelvas
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="order-1 md:order-2">
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 text-center">
              Síguenos en nuestras redes
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Síguenos en ${social.name}`}
                    className={`p-3 sm:p-4 bg-gray-800 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} group`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Información adicional para móviles */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Envíos a toda Colombia</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Garantía extendida</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
