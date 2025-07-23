import React from 'react';
import { FiTruck, FiShield, FiRefreshCw, FiPercent } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

Feature.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Features = () => {
  const features = [
    {
      icon: FiTruck,
      title: 'Envío Rápido',
      description: 'Recibe tu pedido en 24-48 horas'
    },
    {
      icon: FiShield,
      title: 'Pago Seguro',
      description: 'Protegido con cifrado SSL'
    },
    {
      icon: FiRefreshCw,
      title: 'Devoluciones',
      description: '30 días para cambiar de opinión'
    },
    {
      icon: FiPercent,
      title: 'Ofertas',
      description: 'Descuentos especiales semanales'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
