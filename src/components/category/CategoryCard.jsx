import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-64"
      data-testid="category-card"
    >
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
        <Link
          to={`/products?category=${category.slug}`}
          className="flex items-center text-white hover:text-blue-200 transition-colors w-fit border-b border-transparent hover:border-blue-200 pb-1"
        >
          Ver productos
          <FiArrowRight className="ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
