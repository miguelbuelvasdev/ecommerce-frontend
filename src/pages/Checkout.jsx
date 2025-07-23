import React, { useState } from 'react';
import { FiArrowLeft, FiCheck, FiCreditCard, FiMapPin, FiTruck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import ShippingForm from '../components/checkout/ShippingForm';
import PaymentMethods from '../components/checkout/PaymentMethods';
import OrderSummary from '../components/checkout/OrderSummary';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Envío, 2: Pago, 3: Confirmación
  const [shippingData, setShippingData] = useState(null);

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    setStep(2);
  };

  const handlePaymentSubmit = () => {
    // Simular procesamiento de pago
    setTimeout(() => {
      clearCart();
      setStep(3);
    }, 1500);
  };

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold mb-4">Carrito vacío</h2>
          <p className="mb-6">No hay productos en tu carrito</p>
          <a 
            href="/products" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Productos
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div 
                  className={`flex flex-col items-center cursor-pointer ${step >= stepNumber ? 'text-blue-600' : 'text-gray-400'}`}
                  onClick={() => step > stepNumber && setStep(stepNumber)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    step >= stepNumber ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {step > stepNumber ? (
                      <FiCheck className="w-5 h-5 text-green-500" />
                    ) : stepNumber === 1 ? (
                      <FiMapPin className="w-5 h-5" />
                    ) : stepNumber === 2 ? (
                      <FiCreditCard className="w-5 h-5" />
                    ) : (
                      <FiTruck className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-sm font-medium">
                    {stepNumber === 1 ? 'Envío' : stepNumber === 2 ? 'Pago' : 'Confirmación'}
                  </span>
                </div>
                {stepNumber < 3 && (
                  <div className={`h-1 w-20 mx-2 ${step > stepNumber ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            {step === 1 && (
              <ShippingForm onSubmit={handleShippingSubmit} />
            )}

            {step === 2 && (
              <PaymentMethods 
                onSubmit={handlePaymentSubmit} 
                onBack={() => setStep(1)} 
              />
            )}

            {step === 3 && (
              <div className="text-center py-12">
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">¡Pedido Confirmado!</h2>
                  <p className="mb-6">Tu número de pedido es: <span className="font-mono font-bold">ORD-{Math.floor(Math.random() * 1000000)}</span></p>
                  <p className="mb-6">Hemos enviado los detalles a tu correo electrónico.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    >
                      Volver al Inicio
                    </a>
                    <a
                      href="/orders"
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors inline-block"
                    >
                      Ver Mis Pedidos
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="sticky top-4 h-fit">
            <OrderSummary 
              step={step} 
              shippingData={shippingData} 
              onCheckout={() => setStep(2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
