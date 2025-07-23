import React from 'react';
import CategoryCard from './CategoryCard';
import PropTypes from 'prop-types';

const CategorySection = ({ title, categories, columns = 3 }) => {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className={`grid grid-cols-1 ${gridClasses[columns]} gap-8`}>
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

CategorySection.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  columns: PropTypes.oneOf([2, 3, 4])
};

export default CategorySection;
