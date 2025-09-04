import React from 'react';
import { FiShoppingCart, FiHeart, FiCheck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { id, name, price, image, category, discount, isNew } = product;
  const { addToCart, isInCart } = useCart();
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const inCart = isInCart(id);

  const formatPrice = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Vista de lista
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="flex flex-col sm:flex-row">
          {/* Imagen */}
          <div className="relative w-full sm:w-48 h-48 sm:h-auto">
            {/* Badges */}
            <div className="absolute top-2 left-2 z-10 flex gap-2">
              {isNew && (
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  NUEVO
                </span>
              )}
              {discount && (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  -{discount}%
                </span>
              )}
            </div>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="flex-1 p-4 flex flex-col sm:flex-row sm:justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{category}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                <a href={`/product/${id}`} className="hover:text-blue-600 transition-colors">
                  {name}
                </a>
              </h3>
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                {discount ? (
                  <>
                    <span className="text-xl font-bold text-gray-800">
                      {formatPrice(discountedPrice)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(price)}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-gray-800">
                    {formatPrice(price)}
                  </span>
                )}
              </div>
            </div>

            {/* Acciones */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Añadir a favoritos"
              >
                <FiHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
              <button
                onClick={handleAddToCart}
                className={`${
                  inCart ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2`}
              >
                {inCart ? (
                  <>
                    <FiCheck className="w-5 h-5" />
                    <span className="hidden sm:inline">En carrito</span>
                  </>
                ) : (
                  <>
                    <FiShoppingCart className="w-5 h-5" />
                    <span className="hidden sm:inline">Añadir</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista de cuadrícula (original)
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              NUEVO
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        <button
          className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
          aria-label="Añadir a favoritos"
        >
          <FiHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        <a href={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          <a href={`/product/${id}`}>{name}</a>
        </h3>

        <div className="flex items-center gap-2 mb-4">
          {discount ? (
            <>
              <span className="text-xl font-bold text-gray-800">
                {formatPrice(discountedPrice)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(price)}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-800">
              {formatPrice(price)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full ${
            inCart ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group`}
        >
          {inCart ? (
            <>
              <FiCheck className="w-5 h-5" />
              <span>En el carrito</span>
            </>
          ) : (
            <>
              <FiShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Añadir al carrito</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;