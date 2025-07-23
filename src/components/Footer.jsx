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
    { name: 'Electrónica', href: '/category/electronics' },
    { name: 'Ropa', href: '/category/clothing' },
    { name: 'Hogar', href: '/category/home' },
    { name: 'Deportes', href: '/category/sports' }
  ];

  // Información de ayuda - escalable
  const helpLinks = [
    { name: 'Centro de Ayuda', href: '/help' },
    { name: 'Envíos y Devoluciones', href: '/shipping' },
    { name: 'Términos y Condiciones', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' }
  ];

  // Redes sociales - escalable
  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: FiTwitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: FiInstagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Youtube', icon: FiYoutube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Sección Newsletter */}
      

      {/* Sección Principal del Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-blue-500">Mi</span>Tienda
              </h2>
            </a>
            <p className="mb-6 text-gray-400 leading-relaxed">
              Tu tienda online de confianza. Ofrecemos los mejores productos 
              con la mejor calidad y precios competitivos. Tu satisfacción es 
              nuestra prioridad.
            </p>
            
            {/* Información de contacto */}
            <div className="space-y-3">
              <a 
                href="tel:+123456789" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiPhone className="w-5 h-5 text-blue-500" />
                <span>+1 234 567 890</span>
              </a>
              <a 
                href="mailto:info@mitienda.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiMail className="w-5 h-5 text-blue-500" />
                <span>info@mitienda.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-blue-500 mt-1" />
                <span>123 Calle Principal, Ciudad, País</span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda y Soporte */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Ayuda y Soporte</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className={`p-2 bg-gray-800 rounded-full text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

