import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/category/CategorySection';
import Features from '../components/feature/Features';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/newsletter/Newsletter';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Auriculares inalámbricos Bluetooth',
      price: 89900,
      originalPrice: 99889,
      image: '../src/assets/audifonos.webp',
      category: 'Audio',
      rating: 4.8,
      reviews: 125,
      discount: 10
    },
    {
      id: 5,
      name: 'Teclado mecánico gamer',
      price: 129900,
      originalPrice: 162375,
      image: '../src/assets/teclado.webp',
      category: 'Periféricos',
      rating: 4.9,
      reviews: 560,
      discount: 20
    },
    {
      id: 9,
      name: 'Monitor curvo ultrawide',
      price: 450000,
      originalPrice: 529412,
      image: '../src/assets/monitor.webp',
      category: 'Monitores',
      rating: 4.8,
      reviews: 115,
      discount: 15
    },
    {
      id: 11,
      name: 'Smartwatch deportivo',
      price: 150000,
      originalPrice: 166667,
      image: '../src/assets/reloj.webp',
      category: 'Wearables',
      rating: 4.6,
      reviews: 250,
      discount: 10
    },
    {
      id: 17,
      name: 'Silla gamer ergonómica',
      price: 280000,
      originalPrice: 350000,
      image: '../src/assets/silla.webp',
      category: 'Muebles de Oficina',
      rating: 4.7,
      reviews: 230,
      discount: 20
    },
    {
      id: 15,
      name: 'Proyector de bolsillo portátil',
      price: 180000,
      originalPrice: 225000,
      image: '../src/assets/proyector.webp',
      category: 'Video',
      rating: 4.4,
      reviews: 85,
      discount: 20
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Ofertas Especiales',
      slug: 'ofertas',
      image: '../src/assets/audifonos.webp',
      description: 'Descuentos increíbles en productos seleccionados'
    },
    {
      id: 2,
      name: 'Nuevos Lanzamientos',
      slug: 'nuevos',
      image: '../src/assets/teclado.webp',
      description: 'Los productos más recientes del mercado'
    },
    {
      id: 3,
      name: 'Los Más Vendidos',
      slug: 'mas-vendidos',
      image: '../src/assets/monitor.webp',
      description: 'Productos favoritos de nuestros clientes'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <Hero />

      {/* Categorías destacadas */}
      <CategorySection 
        title="Descubre nuestras colecciones" 
        subtitle="Explora nuestras categorías más populares y encuentra exactamente lo que buscas"
        categories={categories}
      />

      {/* Productos destacados */}
      <ProductGrid 
        title="Productos Destacados" 
        subtitle="Los mejores productos seleccionados especialmente para ti con ofertas exclusivas"
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
