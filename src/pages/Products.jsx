import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiGrid, FiList, FiX } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Estados para manejar productos, filtros y búsqueda
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedPriceRange, setSelectedPriceRange] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Categorías disponibles
  const categories = [
    { value: 'todas', label: 'Todas las categorías' },
    { value: 'electronica', label: 'Electrónica' },
    { value: 'ropa', label: 'Ropa' },
    { value: 'hogar', label: 'Hogar' },
    { value: 'deportes', label: 'Deportes' },
    { value: 'libros', label: 'Libros' },
    { value: 'juguetes', label: 'Juguetes' }
  ];

  // Rangos de precio
  const priceRanges = [
    { value: 'todos', label: 'Todos los precios' },
    { value: '0-25', label: '€0 - €25' },
    { value: '25-50', label: '€25 - €50' },
    { value: '50-100', label: '€50 - €100' },
    { value: '100-200', label: '€100 - €200' },
    { value: '200+', label: 'Más de €200' }
  ];

  // Opciones de ordenamiento
  const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'name', label: 'Nombre: A-Z' },
    { value: 'newest', label: 'Más Recientes' }
  ];

  // Datos de ejemplo de productos (en producción vendrían de una API)
  const allProducts = [
    {
      id: 1,
      name: "Smartphone Samsung Galaxy S23",
      price: 899.99,
      category: "electronica",
      image: "https://placehold.co/400x400",
      discount: 15,
      isNew: true,
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      name: "Camiseta Deportiva Nike",
      price: 39.99,
      category: "ropa",
      image: "https://placehold.co/400x400",
      discount: 0,
      isNew: false,
      createdAt: new Date('2024-01-10')
    },
    {
      id: 3,
      name: "Lámpara LED Inteligente",
      price: 59.99,
      category: "hogar",
      image: "https://placehold.co/400x400",
      discount: 20,
      isNew: false,
      createdAt: new Date('2024-01-08')
    },
    {
      id: 4,
      name: "Auriculares Sony WH-1000XM5",
      price: 349.99,
      category: "electronica",
      image: "https://placehold.co/400x400",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-20')
    },
    {
      id: 5,
      name: "Zapatillas Running Adidas",
      price: 89.99,
      category: "deportes",
      image: "https://placehold.co/400x400",
      discount: 25,
      isNew: false,
      createdAt: new Date('2024-01-05')
    },
    {
      id: 6,
      name: "Novela Best Seller 2024",
      price: 19.99,
      category: "libros",
      image: "https://placehold.co/400x400",
      discount: 0,
      isNew: true,
      createdAt: new Date('2024-01-18')
    },
    {
      id: 7,
      name: "Set LEGO Architecture",
      price: 149.99,
      category: "juguetes",
      image: "https://placehold.co/400x400",
      discount: 0,
      isNew: false,
      createdAt: new Date('2024-01-12')
    },
    {
      id: 8,
      name: "Tablet iPad Air",
      price: 649.99,
      category: "electronica",
      image: "https://placehold.co/400x400",
      discount: 5,
      isNew: false,
      createdAt: new Date('2024-01-03')
    }
  ];

  // Inicializar productos al cargar el componente
  useEffect(() => {
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  // Función para filtrar y ordenar productos
  useEffect(() => {
    let filtered = [...products];

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (selectedCategory !== 'todas') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por rango de precio
    if (selectedPriceRange !== 'todos') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        const finalPrice = product.discount 
          ? product.price * (1 - product.discount / 100)
          : product.price;
        
        if (selectedPriceRange === '200+') {
          return finalPrice >= 200;
        }
        return finalPrice >= min && finalPrice <= max;
      });
    }

    // Ordenar productos
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.sort((a, b) => b.createdAt - a.createdAt);
        break;
      default:
        // 'featured' - mantener orden original
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, products]);

  // Función para limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('todas');
    setSelectedPriceRange('todos');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Todos los Productos</h1>
          <p className="text-xl text-blue-100">
            Descubre nuestra amplia selección de productos de alta calidad
          </p>
        </div>
      </section>

      {/* Barra de búsqueda y controles */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Búsqueda */}
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Controles */}
            <div className="flex items-center gap-4">
              {/* Ordenar */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Vista Grid/Lista */}
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>

              {/* Botón de filtros móvil */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden p-2 border border-gray-300 rounded-lg flex items-center gap-2"
              >
                <FiFilter className="w-5 h-5" />
                <span>Filtros</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar de filtros - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Filtros</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Limpiar todo
                </button>
              </div>

              {/* Filtro por categoría */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Categoría</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-600 hover:text-gray-900">
                        {category.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro por precio */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Precio</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={selectedPriceRange === range.value}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-600 hover:text-gray-900">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Sidebar de filtros - Móvil */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
              <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-800">Filtros</h2>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mismos filtros que en desktop */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Categoría</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <label key={category.value} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="category-mobile"
                            value={category.value}
                            checked={selectedCategory === category.value}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mr-2 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-600">{category.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Precio</h3>
                    <div className="space-y-2">
                      {priceRanges.map(range => (
                        <label key={range.value} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="price-mobile"
                            value={range.value}
                            checked={selectedPriceRange === range.value}
                            onChange={(e) => setSelectedPriceRange(e.target.value)}
                            className="mr-2 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-600">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={clearFilters}
                    className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </aside>
            </div>
          )}

          {/* Grid de productos */}
          <div className="flex-1">
            {/* Contador de resultados */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Mostrando {filteredProducts.length} de {products.length} productos
              </p>
              {(searchTerm || selectedCategory !== 'todas' || selectedPriceRange !== 'todos') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 underline"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            {/* Productos */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  No se encontraron productos que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver todos los productos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
