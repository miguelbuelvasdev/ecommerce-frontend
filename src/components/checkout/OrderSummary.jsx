import React from 'react';
import { useCart } from '../../context/CartContext';
import { FiTruck } from 'react-icons/fi';

const OrderSummary = ({ step, shippingData, onCheckout }) => {
  const { 
    cartItems, 
    getCartTotal, 
    getCartSubtotal, 
    getTotalDiscount 
  } = useCart();

  const formatPrice = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>

      {/* Product List */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {cartItems.map(item => {
          const itemPrice = item.discount ? 
            item.price * (1 - item.discount / 100) : 
            item.price;
          
          return (
            <div key={item.id} className="flex gap-4 pb-4 border-b">
              <img 
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 line-clamp-2">{item.name}</h3>
                <div className="flex justify-between mt-1">
                  <span className="text-sm text-gray-500">
                    {item.quantity} × {formatPrice(itemPrice)}
                  </span>
                  <span className="font-medium">
                    {formatPrice(itemPrice * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Shipping Info */}
      {shippingData && step >= 2 && (
        <div className="mb-6 border-t pt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Envío</h3>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <FiTruck className="w-5 h-5 mt-0.5 text-blue-500" />
            <div>
              <p>{shippingData.address}</p>
              <p>
                {shippingData.postalCode}, {shippingData.city}
              </p>
              <p>{shippingData.country}</p>
            </div>
          </div>
        </div>
      )}

      {/* Totals */}
      <div className="space-y-3 mb-6 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{formatPrice(getCartSubtotal())}</span>
        </div>
        
        {getTotalDiscount() > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Descuentos</span>
            <span>-{formatPrice(getTotalDiscount())}</span>
          </div>
        )}
        
        <div className="flex justify-between text-gray-600">
          <span>Envío</span>
          <span className="text-green-600">Gratis</span>
        </div>
        
        <div className="flex justify-between text-lg font-bold text-gray-800 pt-2">
          <span>Total</span>
          <span>{formatPrice(getCartTotal())}</span>
        </div>
      </div>

      {/* Checkout Button (only shown in shipping step) */}
      {step === 1 && (
        <button
          onClick={onCheckout}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Continuar con el pago
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
