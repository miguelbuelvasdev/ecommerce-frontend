import React from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartSubtotal,
    getTotalDiscount
  } = useCart();

  // Función para formatear precios en pesos colombianos
  const formatPrice = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Si el carrito no está abierto, no renderizar nada
  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Panel del carrito */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col transform transition-transform duration-300">
        {/* Header del carrito */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FiShoppingBag className="w-6 h-6" />
            Mi Carrito ({cartItems.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido del carrito */}
        {cartItems.length === 0 ? (
          // Carrito vacío
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <FiShoppingBag className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg mb-4">Tu carrito está vacío</p>
            <Link
              to="/products"
              onClick={() => setIsCartOpen(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explorar Productos
            </Link>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.map(item => {
                const itemPrice = item.discount
                  ? item.price * (1 - item.discount / 100)
                  : item.price;

                return (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      {/* Imagen del producto */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Información del producto */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{item.category}</p>

                        {/* Precio */}
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-800">
                            {formatPrice(itemPrice)}
                          </span>
                          {item.discount > 0 && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(item.price)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Eliminar producto */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Controles de cantidad */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-600">Cantidad:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <FiMinus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <FiPlus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {formatPrice(itemPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Botón vaciar carrito */}
              <button
                onClick={clearCart}
                className="w-full mt-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm"
              >
                Vaciar carrito
              </button>
            </div>

            {/* Resumen y checkout */}
            <div className="border-t p-4 bg-gray-50">
              {/* Subtotal */}
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>{formatPrice(getCartSubtotal())}</span>
              </div>

              {/* Descuentos */}
              {getTotalDiscount() > 0 && (
                <div className="flex justify-between text-sm text-green-600 mb-2">
                  <span>Descuentos</span>
                  <span>-{formatPrice(getTotalDiscount())}</span>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
                <span>Total</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>

              {/* Botones de acción */}
              <div className="space-y-2">
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition-colors font-semibold"
                >
                  Proceder al Checkout
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Seguir Comprando
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
