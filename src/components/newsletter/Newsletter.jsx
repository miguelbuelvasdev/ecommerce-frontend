import React, { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Newsletter = ({ 
  title = "¡Suscríbete a nuestro newsletter!", 
  description = "Recibe las últimas ofertas y novedades directamente en tu correo.",
  buttonText = "Suscribirse",
  successMessage = "¡Gracias por suscribirte!"
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="bg-blue-600 text-white py-12 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
        <p className="mb-8 text-blue-100">{description}</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-grow">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full pl-10 pr-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
              disabled={status === 'success'}
            />
          </div>
          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`px-6 py-3 rounded-lg font-medium ${
              status === 'success' 
                ? 'bg-green-500' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            } transition-colors flex items-center justify-center gap-2 min-w-[150px]`}
          >
            {status === 'success' ? (
              successMessage
            ) : (
              <>
                <FiSend />
                {buttonText}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  successMessage: PropTypes.string
};

export default Newsletter;
