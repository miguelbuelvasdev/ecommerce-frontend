import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {title}
        </h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón ver más */}
        <div className="text-center mt-8">
          <a
            href="/products"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            Ver todos los productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
