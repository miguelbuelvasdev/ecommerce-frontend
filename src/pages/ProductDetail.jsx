import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiShare2, 
  FiTruck, 
  FiShield, 
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiCheck,
  FiMinus,
  FiPlus
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  
  // Estados
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simular carga de producto (en producción vendría de una API)
  useEffect(() => {
    // Simulamos una llamada a API
    setTimeout(() => {
      // Datos de ejemplo del producto
      const productData = {
        id: parseInt(id),
        name: "Smartphone Samsung Galaxy S23 Ultra 5G",
        price: 1299.99,
        discount: 15,
        category: "Electrónica",
        brand: "Samsung",
        rating: 4.5,
        reviews: 234,
        stock: 15,
        isNew: true,
        images: [
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93dc3c5a-c224-4e2f-b699-47e5071b2eb0.png",
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a72c794d-e318-483d-819a-8f5cf1a18a9e.png",
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70d9bb53-5ae0-45b1-a2a9-99ec7b0c2685.png",
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a2b37bcf-5959-4c70-ad95-f157f9588af0.png"
        ],
        description: "El Samsung Galaxy S23 Ultra 5G es el smartphone más avanzado de Samsung. Con su impresionante pantalla Dynamic AMOLED 2X de 6.8 pulgadas, cámara de 200MP y el potente procesador Snapdragon 8 Gen 2, este dispositivo redefine la experiencia móvil premium.",
        features: [
          "Pantalla Dynamic AMOLED 2X de 6.8\" con 120Hz",
          "Cámara principal de 200MP con zoom óptico 10x",
          "Procesador Snapdragon 8 Gen 2 for Galaxy",
          "Batería de 5000mAh con carga rápida de 45W",
          "S Pen integrado con latencia ultrabaja",
          "Resistencia al agua IP68",
          "512GB de almacenamiento interno",
          "12GB de RAM"
        ],
        specifications: {
          "Pantalla": "6.8\" Dynamic AMOLED 2X, 3088 x 1440, 120Hz",
          "Procesador": "Snapdragon 8 Gen 2 for Galaxy",
          "RAM": "12GB",
          "Almacenamiento": "512GB",
          "Cámara Principal": "200MP, f/1.7, OIS",
          "Cámara Frontal": "12MP, f/2.2",
          "Batería": "5000mAh",
          "Sistema Operativo": "Android 13 con One UI 5.1",
          "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3, NFC",
          "Dimensiones": "163.4 x 78.1 x 8.9 mm",
          "Peso": "234g"
        }
      };

      setProduct(productData);
      
      // Productos relacionados de ejemplo
      const related = [
        {
          id: 101,
          name: "iPhone 14 Pro Max",
          price: 1399.99,
          category: "Electrónica",
          image: "https://placehold.co/400x400",
          discount: 10,
          isNew: false
        },
        {
          id: 102,
          name: "Google Pixel 8 Pro",
          price: 999.99,
          category: "Electrónica",
          image: "https://placehold.co/400x400",
          discount: 0,
          isNew: true
        },
        {
          id: 103,
          name: "OnePlus 11",
          price: 799.99,
          category: "Electrónica",
          image: "https://placehold.co/400x400",
          discount: 20,
          isNew: false
        },
        {
          id: 104,
          name: "Xiaomi 13 Pro",
          price: 899.99,
          category: "Electrónica",
          image: "https://placehold.co/400x400",
          discount: 0,
          isNew: true
        }
      ];
      
      setRelatedProducts(related);
      setLoading(false);
    }, 1000);
  }, [id]);

  // Funciones de manejo
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Opcional: mostrar notificación o feedback
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const formatPrice = (value) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const calculateDiscountedPrice = () => {
    if (product && product.discount) {
      return product.price * (1 - product.discount / 100);
    }
    return product?.price || 0;
  };

  // Renderizar estrellas de rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-gray-600">({rating})</span>
      </div>
    );
  };

  // Mostrar loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Si no se encuentra el producto
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Producto no encontrado
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-gray-700">Inicio</a>
            <span className="text-gray-400">/</span>
            <a href="/products" className="text-gray-500 hover:text-gray-700">Productos</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galería de imágenes */}
          <div className="bg-white rounded-lg p-6">
            {/* Imagen principal */}
            <div className="relative mb-4 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - Vista ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navegación de imágenes */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Imagen anterior"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Siguiente imagen"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    NUEVO
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    -{product.discount}%
                  </span>
                )}
              </div>
            </div>

            {/* Miniaturas */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-500' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Información del producto */}
          <div className="bg-white rounded-lg p-6">
            {/* Categoría y marca */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-500">{product.category}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{product.brand}</span>
            </div>

            {/* Nombre del producto */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            {/* Rating y reviews */}
            <div className="flex items-center gap-4 mb-6">
              {renderStars(product.rating)}
              <span className="text-gray-600">
                {product.reviews} reseñas
              </span>
            </div>

            {/* Precio */}
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-800">
                    {formatPrice(calculateDiscountedPrice())}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm font-semibold">
                    Ahorras {formatPrice(product.price - calculateDiscountedPrice())}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center gap-2">
                  <FiCheck className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-semibold">En stock</span>
                  <span className="text-gray-500">({product.stock} disponibles)</span>
                </div>
              ) : (
                <span className="text-red-600 font-semibold">Agotado</span>
              )}
            </div>

            {/* Selector de cantidad y botón de compra */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Selector de cantidad */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <FiMinus className="w-5 h-5" />
                </button>
                <span className="px-4 py-3 min-w-[60px] text-center font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  disabled={quantity >= product.stock}
                >
                  <FiPlus className="w-5 h-5" />
                </button>
              </div>

              {/* Botón añadir al carrito */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  product.stock === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : isInCart(product.id)
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <FiShoppingCart className="w-5 h-5" />
                {isInCart(product.id) ? 'Añadir más al carrito' : 'Añadir al carrito'}
              </button>
            </div>

            {/* Botones secundarios */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <FiHeart className="w-5 h-5" />
                <span>Favoritos</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <FiShare2 className="w-5 h-5" />
                <span>Compartir</span>
              </button>
            </div>

            {/* Características principales */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Características principales:
              </h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beneficios de compra */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="flex flex-col items-center text-center">
                <FiTruck className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-gray-800">Envío Gratis</span>
                <span className="text-xs text-gray-500">En pedidos +50€</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FiShield className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-gray-800">Garantía</span>
                <span className="text-xs text-gray-500">2 años</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FiRefreshCw className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-gray-800">Devolución</span>
                <span className="text-xs text-gray-500">30 días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información */}
        <div className="bg-white rounded-lg shadow-lg mb-12">
          {/* Tab headers */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 font-semibold transition-colors relative ${
                activeTab === 'description'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Descripción
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-4 font-semibold transition-colors relative ${
                activeTab === 'specifications'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Especificaciones
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-semibold transition-colors relative ${
                activeTab === 'reviews'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Reseñas ({product.reviews})
            </button>
          </div>

          {/* Tab content */}
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Características destacadas:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">
                  Especificaciones técnicas
                </h3>
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 pr-4 font-medium text-gray-700 w-1/3">
                          {key}
                        </td>
                        <td className="py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-4">Las reseñas estarán disponibles próximamente</p>
                  <button className="text-blue-600 hover:text-blue-700 underline">
                    Sé el primero en escribir una reseña
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Productos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

