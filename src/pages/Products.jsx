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

  // Categorías disponibles (actualizadas según los productos reales)
  const categories = [
    { value: 'todas', label: 'Todas las categorías' },
    { value: 'Audio', label: 'Audio' },
    { value: 'Accesorios de Carga', label: 'Accesorios de Carga' },
    { value: 'Periféricos', label: 'Periféricos' },
    { value: 'Monitores', label: 'Monitores' },
    { value: 'Almacenamiento', label: 'Almacenamiento' },
    { value: 'Wearables', label: 'Wearables' },
    { value: 'Video', label: 'Video' },
    { value: 'Muebles de Oficina', label: 'Muebles de Oficina' },
    { value: 'Accesorios', label: 'Accesorios' }
  ];

  // Rangos de precio en pesos colombianos
  const priceRanges = [
    { value: 'todos', label: 'Todos los precios' },
    { value: '0-50000', label: '$0 - $50,000 COP' },
    { value: '50000-100000', label: '$50,000 - $100,000 COP' },
    { value: '100000-200000', label: '$100,000 - $200,000 COP' },
    { value: '200000-300000', label: '$200,000 - $300,000 COP' },
    { value: '300000+', label: 'Más de $300,000 COP' }
  ];

  // Opciones de ordenamiento
  const sortOptions = [
    { value: 'featured', label: 'Destacados' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'name', label: 'Nombre: A-Z' },
    { value: 'newest', label: 'Más Recientes' }
  ];

  // Datos reales de productos con información del productsDatabase
  const allProducts = [
    {
      id: 1,
      name: "Auriculares inalámbricos Bluetooth",
      price: 89900,
      category: "Audio",
      image: "../src/assets/audifonos.webp",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-20'),
      description: "Experimenta la libertad del sonido sin cables con estos auriculares. Conectividad Bluetooth 5.0, estuche de carga portátil y un diseño ergonómico para un ajuste perfecto.",
      brand: "AudioFlow",
      rating: 4.8,
      reviews: 125,
      stock: 45
    },
    {
      id: 2,
      name: "Power bank de alta capacidad",
      price: 45900,
      category: "Accesorios de Carga",
      image: "../src/assets/cargador.webp",
      discount: 0,
      isNew: false,
      createdAt: new Date('2024-01-15'),
      description: "Mantén tus dispositivos siempre cargados con este power bank de alta capacidad. Su diseño compacto y ligero lo hace ideal para viajes, y su pantalla LED te informa del estado de la batería.",
      brand: "Ciaoqiek",
      rating: 4.6,
      reviews: 320,
      stock: 70
    },
    {
      id: 3,
      name: "Cargador inalámbrico rápido",
      price: 32900,
      category: "Accesorios de Carga",
      image: "../src/assets/cargador-inalambrico.webp",
      discount: 15,
      isNew: true,
      createdAt: new Date('2024-01-18'),
      description: "Carga tus dispositivos de forma rápida y sin cables. Este cargador inalámbrico es compatible con la mayoría de los smartphones y ofrece una carga eficiente y segura.",
      brand: "ChargeX",
      rating: 4.4,
      reviews: 189,
      stock: 55
    },
    {
      id: 4,
      name: "Cable USB-C multipuerto",
      price: 25900,
      category: "Accesorios de Carga",
      image: "../src/assets/conector.webp",
      discount: 5,
      isNew: false,
      createdAt: new Date('2024-01-10'),
      description: "Un solo cable para todas tus necesidades. Este cable multipuerto con conector USB-C te permite conectar múltiples dispositivos y pantallas a tu laptop o tablet.",
      brand: "Wi-BPC",
      rating: 4.7,
      reviews: 95,
      stock: 110
    },
    {
      id: 5,
      name: "Teclado mecánico gamer",
      price: 129900,
      category: "Periféricos",
      image: "../src/assets/teclado.webp",
      discount: 20,
      isNew: true,
      createdAt: new Date('2024-01-22'),
      description: "Domina el juego con este teclado mecánico diseñado para gamers. Con switches de alta respuesta, retroiluminación RGB personalizable y un diseño robusto, te ofrece la ventaja que necesitas.",
      brand: "GamingGear",
      rating: 4.9,
      reviews: 560,
      stock: 30
    },
    {
      id: 6,
      name: "Mouse ergonómico inalámbrico",
      price: 65900,
      category: "Periféricos",
      image: "../src/assets/mouse.webp",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-19'),
      description: "Reduce la fatiga de la mano y aumenta tu productividad con este mouse ergonómico inalámbrico. Su diseño contorneado se adapta perfectamente a la palma de la mano.",
      brand: "Sngus",
      rating: 4.7,
      reviews: 210,
      stock: 40
    },
    {
      id: 7,
      name: "Soporte ajustable para laptop",
      price: 38500,
      category: "Accesorios",
      image: "../src/assets/base-portatil.webp",
      discount: 0,
      isNew: false,
      createdAt: new Date('2024-01-08'),
      description: "Mejora tu postura y la ventilación de tu laptop con este soporte ajustable. Fabricado en aluminio, es resistente y ligero, ideal para trabajar o estudiar cómodamente.",
      brand: "ErgoRise",
      rating: 4.5,
      reviews: 150,
      stock: 85
    },
    {
      id: 8,
      name: "Webcam Full HD",
      price: 79900,
      category: "Periféricos",
      image: "../src/assets/camara.webp",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-17'),
      description: "Transmite video en alta definición con esta webcam Full HD. Ideal para videollamadas, streaming y creación de contenido. Con enfoque automático y micrófono incorporado.",
      brand: "WebCam Pro",
      rating: 4.3,
      reviews: 90,
      stock: 60
    },
    {
      id: 9,
      name: "Monitor curvo ultrawide",
      price: 450000,
      category: "Monitores",
      image: "../src/assets/monitor.webp",
      discount: 15,
      isNew: true,
      createdAt: new Date('2024-01-25'),
      description: "Sumérgete en tus juegos y películas con este monitor curvo ultrawide. Su pantalla panorámica te ofrece una experiencia visual inmersiva y un mayor espacio de trabajo para multitareas.",
      brand: "DisplayMax",
      rating: 4.8,
      reviews: 115,
      stock: 20
    },
    {
      id: 10,
      name: "SSD externo portátil",
      price: 95000,
      category: "Almacenamiento",
      image: "../src/assets/ssd-externo.webp",
      discount: 0,
      isNew: false,
      createdAt: new Date('2024-01-12'),
      description: "Lleva tus archivos a donde vayas con este SSD portátil. Ofrece velocidades de transferencia ultrarrápidas en un diseño compacto y resistente a golpes y vibraciones.",
      brand: "StorageX",
      rating: 4.7,
      reviews: 178,
      stock: 50
    },
    {
      id: 11,
      name: "Smartwatch deportivo",
      price: 150000,
      category: "Wearables",
      image: "../src/assets/reloj.webp",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-21'),
      description: "Monitorea tu salud y actividad física con este smartwatch deportivo. Cuenta con múltiples modos de deporte, medición de frecuencia cardíaca y oxígeno en sangre.",
      brand: "FitTech",
      rating: 4.6,
      reviews: 250,
      stock: 35
    },
    {
      id: 12,
      name: "Pulsera fitness tracker",
      price: 50000,
      category: "Wearables",
      image: "../src/assets/reloj2.webp",
      discount: 5,
      isNew: false,
      createdAt: new Date('2024-01-14'),
      description: "Una pulsera elegante y funcional para seguir tu actividad diaria. Cuenta pasos, monitorea tu sueño y recibe notificaciones de tu teléfono, todo en un diseño ligero y discreto.",
      brand: "TrackFit",
      rating: 4.5,
      reviews: 180,
      stock: 90
    },
    {
      id: 13,
      name: "Altavoz Bluetooth portátil",
      price: 75000,
      category: "Audio",
      image: "../src/assets/parlante.webp",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-23'),
      description: "Lleva la fiesta a cualquier lugar con este potente altavoz Bluetooth portátil. Ofrece un sonido nítido y graves profundos, con una batería que dura todo el día.",
      brand: "AudioFlow",
      rating: 4.7,
      reviews: 310,
      stock: 65
    },
    {
      id: 14,
      name: "Barra de sonido compacta",
      price: 190000,
      category: "Audio",
      image: "../src/assets/parlante2.webp",
      discount: 15,
      isNew: false,
      createdAt: new Date('2024-01-11'),
      description: "Mejora la calidad de sonido de tu televisor sin ocupar mucho espacio. Esta barra de sonido compacta ofrece un sonido cinematográfico y se conecta fácilmente a través de Bluetooth o HDMI.",
      brand: "Soundrens",
      rating: 4.6,
      reviews: 140,
      stock: 30
    },
    {
      id: 15,
      name: "Proyector de bolsillo portátil",
      price: 180000,
      category: "Video",
      image: "../src/assets/proyector.webp",
      discount: 20,
      isNew: true,
      createdAt: new Date('2024-01-24'),
      description: "Convierte cualquier pared en una pantalla de cine con este proyector de bolsillo. Perfecto para presentaciones, noches de cine al aire libre o para llevar a casa de amigos.",
      brand: "VividView",
      rating: 4.4,
      reviews: 85,
      stock: 25
    },
    {
      id: 16,
      name: "Micrófono USB para streaming",
      price: 85000,
      category: "Audio",
      image: "../src/assets/microfono.webp",
      discount: 10,
      isNew: false,
      createdAt: new Date('2024-01-13'),
      description: "Graba tu voz con calidad profesional para streaming, podcasts o gaming. Este micrófono USB es fácil de usar, con un patrón de captación cardioide y un soporte de escritorio robusto.",
      brand: "AudioTech",
      rating: 4.8,
      reviews: 160,
      stock: 40
    },
    {
      id: 17,
      name: "Silla gamer ergonómica",
      price: 280000,
      category: "Muebles de Oficina",
      image: "../src/assets/silla.webp",
      discount: 20,
      isNew: true,
      createdAt: new Date('2024-01-26'),
      description: "Juega o trabaja durante horas con la máxima comodidad. Esta silla gamer ergonómica ofrece soporte lumbar y cervical ajustable, reposabrazos 4D y un diseño reclinable.",
      brand: "GamingGear",
      rating: 4.7,
      reviews: 230,
      stock: 15
    },
    {
      id: 18,
      name: "Hub USB-C con múltiples puertos",
      price: 55000,
      category: "Accesorios",
      image: "../src/assets/hdmi.webp",
      discount: 5,
      isNew: false,
      createdAt: new Date('2024-01-09'),
      description: "Expande la conectividad de tu laptop con este hub USB-C compacto. Convierte un solo puerto USB-C en múltiples puertos para transferir datos, conectar pantallas y más.",
      brand: "TechHub",
      rating: 4.6,
      reviews: 110,
      stock: 75
    },
    {
      id: 19,
      name: "Disco duro NAS doméstico",
      price: 320000,
      category: "Almacenamiento",
      image: "../src/assets/DISCO-DOMESTICO.webp",
      discount: 10,
      isNew: true,
      createdAt: new Date('2024-01-27'),
      description: "Centraliza y protege tus datos en la nube personal de tu hogar. Este NAS te permite acceder a tus archivos desde cualquier dispositivo, crear copias de seguridad automáticas y compartir contenido multimedia fácilmente.",
      brand: "StoreHO",
      rating: 4.5,
      reviews: 90,
      stock: 20
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
        
        if (selectedPriceRange === '300000+') {
          return finalPrice >= 300000;
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