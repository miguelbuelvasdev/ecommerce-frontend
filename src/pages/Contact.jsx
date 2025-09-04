import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contactData = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Correo Electrónico",
      description: "contacto@miguelbuelvasdev.com",
      link: "mailto:contacto@miguelbuelvasdev.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Teléfono",
      description: "+57 300 901 6173",
      link: "+573009016173"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Dirección",
      description: "El Carmen de Bolívar, Colombia",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-blue-100">
            Estamos aquí para ayudarte. ¡Escríbenos!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-6">Envía un mensaje</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
            <ContactInfo contacts={contactData} />
            
            {/* Map Embed */}
            <div className="mt-8 h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Ubicación de la tienda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215244223647!2d-73.98784368459369!3d40.74844037932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
