import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/category/CategorySection';
import Features from '../components/feature/Features';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/newsletter/Newsletter';

const Home = () => {
  const featuredProducts = [
    // Tus productos destacados aquí
  ];

  const categories = [
    {
      id: 1,
      name: 'Ofertas Especiales',
      slug: 'ofertas',
      image: 'https://placehold.co/600x400?text=Ofertas+Especiales'
    },
    {
      id: 2,
      name: 'Nuevos Lanzamientos',
      slug: 'nuevos',
      image: 'https://placehold.co/600x400?text=Nuevos+Lanzamientos'
    },
    {
      id: 3,
      name: 'Los Más Vendidos',
      slug: 'mas-vendidos',
      image: 'https://placehold.co/600x400?text=Más+Vendidos'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <Hero />

      {/* Categorías destacadas */}
      <CategorySection 
        title="Descubre nuestras colecciones" 
        categories={categories}
      />

      {/* Productos destacados */}
      <ProductGrid 
        title="Productos Destacados" 
        products={featuredProducts} 
      />

      {/* Beneficios */}
      <Features />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
