import React, { useState } from 'react';
import { FiCreditCard, FiArrowLeft } from 'react-icons/fi';

const PaymentMethods = ({ onSubmit, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleCardChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-700"
      >
        <FiArrowLeft className="w-5 h-5" />
        Volver a envío
      </button>

      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <FiCreditCard className="w-6 h-6" />
        Método de Pago
      </h2>

      <div className="space-y-4">
        <div className="border border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
          <div className="flex items-center gap-4">
            <input 
              type="radio" 
              id="creditCard" 
              name="payment" 
              checked={paymentMethod === 'creditCard'}
              onChange={() => setPaymentMethod('creditCard')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="creditCard" className="flex-1 font-medium">
              Tarjeta de Crédito/Débito
            </label>
          </div>

          {paymentMethod === 'creditCard' && (
            <div className="mt-4 pl-8 space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Número de Tarjeta</label>
                <input
                  type="text"
                  name="number"
                  value={cardData.number}
                  onChange={handleCardChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Fecha Expiración</label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleCardChange}
                    placeholder="MM/AA"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleCardChange}
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Nombre en la Tarjeta</label>
                <input
                  type="text"
                  name="name"
                  value={cardData.name}
                  onChange={handleCardChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        <div className="border border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
          <div className="flex items-center gap-4">
            <input 
              type="radio" 
              id="paypal" 
              name="payment" 
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="paypal" className="flex-1 font-medium">
              PayPal
            </label>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
          <div className="flex items-center gap-4">
            <input 
              type="radio" 
              id="transfer" 
              name="payment" 
              checked={paymentMethod === 'transfer'}
              onChange={() => setPaymentMethod('transfer')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="transfer" className="flex-1 font-medium">
              Transferencia Bancaria
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={onSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
