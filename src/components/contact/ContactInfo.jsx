import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = ({ contacts }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                {contact.icon}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{contact.title}</h3>
              {contact.link ? (
                <Link 
                  to={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contact.description}
                </Link>
              ) : (
                <p className="text-gray-600">{contact.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <h3 className="font-medium text-gray-800 mb-2">Horario de atención:</h3>
        <ul className="text-gray-600 space-y-1">
          <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
          <li>Sábados: 10:00 AM - 2:00 PM</li>
          <li>Domingos: Cerrado</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
