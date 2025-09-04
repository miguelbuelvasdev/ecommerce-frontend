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

// Base de datos simulada de productos

const productsDatabase = {
  "1": {
    "id": 1,
    "name": "Auriculares inalámbricos Bluetooth",
    "price": 89900,
    "discount": 10,
    "category": "Audio",
    "brand": "AudioFlow",
    "rating": 4.8,
    "reviews": 125,
    "stock": 45,
    "isNew": true,
    "images": [
      "../src/assets/audifonos.webp"
    ],
    "description": "Experimenta la libertad del sonido sin cables con estos auriculares. Conectividad Bluetooth 5.0, estuche de carga portátil y un diseño ergonómico para un ajuste perfecto.",
    "features": [
      "Conectividad Bluetooth 5.0",
      "Estuche de carga compacto",
      "Control táctil intuitivo",
      "Hasta 20 horas de batería con el estuche",
      "Ajuste ergonómico y seguro",
      "Resistencia al sudor IPX4"
    ],
    "specifications": {
      "Conectividad": "Bluetooth 5.0",
      "Duración de la batería": "5 horas (auriculares) + 15 horas (estuche)",
      "Tiempo de carga": "1.5 horas",
      "Resistencia": "IPX4",
      "Peso": "5g por auricular",
      "Dimensiones del estuche": "60 x 40 x 25 mm"
    }
  },
  "2": {
    "id": 2,
    "name": "Power bank de alta capacidad",
    "price": 45900,
    "discount": 0,
    "category": "Accesorios de Carga",
    "brand": "Ciaoqiek",
    "rating": 4.6,
    "reviews": 320,
    "stock": 70,
    "isNew": false,
    "images": [
      "../src/assets/cargador.webp"
    ],
    "description": "Mantén tus dispositivos siempre cargados con este power bank de alta capacidad. Su diseño compacto y ligero lo hace ideal para viajes, y su pantalla LED te informa del estado de la batería.",
    "features": [
      "Capacidad de 20000mAh",
      "Carga rápida de 18W",
      "Múltiples puertos de salida (USB-A, USB-C)",
      "Pantalla LED de estado de la batería",
      "Diseño portátil y robusto",
      "Protección contra sobrecargas y cortocircuitos"
    ],
    "specifications": {
      "Capacidad": "20000mAh",
      "Puertos de Salida": "2x USB-A, 1x USB-C",
      "Potencia de Salida": "18W",
      "Indicador de Batería": "Pantalla LED",
      "Dimensiones": "140 x 70 x 25 mm",
      "Peso": "350g"
    }
  },
  "3": {
    "id": 3,
    "name": "Cargador inalámbrico rápido",
    "price": 32900,
    "discount": 15,
    "category": "Accesorios de Carga",
    "brand": "ChargeX",
    "rating": 4.4,
    "reviews": 189,
    "stock": 55,
    "isNew": true,
    "images": [
      "../src/assets/cargador-inalambrico.webp"
    ],
    "description": "Carga tus dispositivos de forma rápida y sin cables. Este cargador inalámbrico es compatible con la mayoría de los smartphones y ofrece una carga eficiente y segura.",
    "features": [
      "Carga rápida inalámbrica",
      "Compatibilidad universal Qi",
      "Diseño delgado y elegante",
      "Indicador LED de estado de carga",
      "Protección contra sobrecalentamiento"
    ],
    "specifications": {
      "Potencia de Salida": "10W/7.5W/5W",
      "Estándar de Carga": "Qi",
      "Dimensiones": "90 mm de diámetro, 8 mm de grosor",
      "Peso": "80g"
    }
  },
  "4": {
    "id": 4,
    "name": "Cable USB-C multipuerto",
    "price": 25900,
    "discount": 5,
    "category": "Accesorios de Carga",
    "brand": "Wi-BPC",
    "rating": 4.7,
    "reviews": 95,
    "stock": 110,
    "isNew": false,
    "images": [
      "../src/assets/conector.webp"
    ],
    "description": "Un solo cable para todas tus necesidades. Este cable multipuerto con conector USB-C te permite conectar múltiples dispositivos y pantallas a tu laptop o tablet.",
    "features": [
      "Conector USB-C a HDMI, USB-A y USB-C",
      "Soporta video 4K a 60Hz",
      "Carga de alta velocidad",
      "Material de nylon trenzado duradero",
      "Diseño compacto y portátil"
    ],
    "specifications": {
      "Conectores": "USB-C (macho), USB-A (hembra), HDMI (hembra), USB-C (hembra)",
      "Resolución de Video": "Hasta 4K@60Hz",
      "Potencia de Carga": "Hasta 100W",
      "Material": "Nylon trenzado",
      "Longitud": "15 cm"
    }
  },
  "5": {
    "id": 5,
    "name": "Teclado mecánico gamer",
    "price": 129900,
    "discount": 20,
    "category": "Periféricos",
    "brand": "GamingGear",
    "rating": 4.9,
    "reviews": 560,
    "stock": 30,
    "isNew": true,
    "images": [
      "../src/assets/teclado.webp"
    ],
    "description": "Domina el juego con este teclado mecánico diseñado para gamers. Con switches de alta respuesta, retroiluminación RGB personalizable y un diseño robusto, te ofrece la ventaja que necesitas.",
    "features": [
      "Switches mecánicos de respuesta rápida",
      "Retroiluminación RGB personalizable por tecla",
      "Teclas anti-ghosting",
      "Marco de aluminio de grado aeronáutico",
      "Diseño de teclas de doble inyección",
      "Software de personalización avanzado"
    ],
    "specifications": {
      "Tipo de Switch": "Mecánico",
      "Retroiluminación": "RGB por tecla",
      "Conectividad": "USB-C cableado",
      "Diseño": "Tamaño completo",
      "Material del Marco": "Aluminio"
    }
  },
  "6": {
    "id": 6,
    "name": "Mouse ergonómico inalámbrico",
    "price": 65900,
    "discount": 10,
    "category": "Periféricos",
    "brand": "Sngus",
    "rating": 4.7,
    "reviews": 210,
    "stock": 40,
    "isNew": true,
    "images": [
      "../src/assets/mouse.webp"
    ],
    "description": "Reduce la fatiga de la mano y aumenta tu productividad con este mouse ergonómico inalámbrico. Su diseño contorneado se adapta perfectamente a la palma de la mano, mientras que su conexión sin demoras garantiza un rendimiento impecable.",
    "features": [
      "Diseño ergonómico vertical",
      "Conectividad inalámbrica 2.4GHz",
      "DPI ajustable",
      "Batería recargable de larga duración",
      "5 botones programables",
      "Superficie suave al tacto"
    ],
    "specifications": {
      "Conectividad": "Inalámbrica (receptor USB)",
      "Sensor": "Óptico",
      "DPI": "Hasta 2400",
      "Batería": "Recargable de polímero de litio",
      "Dimensiones": "120 x 80 x 65 mm"
    }
  },
  "7": {
    "id": 7,
    "name": "Soporte ajustable para laptop",
    "price": 38500,
    "discount": 0,
    "category": "Accesorios",
    "brand": "ErgoRise",
    "rating": 4.5,
    "reviews": 150,
    "stock": 85,
    "isNew": false,
    "images": [
      "../src/assets/base-portatil.webp"
    ],
    "description": "Mejora tu postura y la ventilación de tu laptop con este soporte ajustable. Fabricado en aluminio, es resistente y ligero, ideal para trabajar o estudiar cómodamente.",
    "features": [
      "Fabricado en aluminio resistente",
      "Diseño plegable y portátil",
      "Ajustable en altura y ángulo",
      "Ranuras para una mejor ventilación",
      "Almohadillas de silicona antideslizantes"
    ],
    "specifications": {
      "Material": "Aluminio",
      "Compatibilidad": "Laptops de hasta 17 pulgadas",
      "Ángulos de ajuste": "Múltiples",
      "Peso": "250g"
    }
  },
  "8": {
    "id": 8,
    "name": "Webcam Full HD",
    "price": 79900,
    "discount": 10,
    "category": "Periféricos",
    "brand": "WebCam Pro",
    "rating": 4.3,
    "reviews": 90,
    "stock": 60,
    "isNew": true,
    "images": [
      "../src/assets/camara.webp"
    ],
    "description": "Transmite video en alta definición con esta webcam Full HD. Ideal para videollamadas, streaming y creación de contenido. Con enfoque automático y micrófono incorporado.",
    "features": [
      "Resolución Full HD (1080p)",
      "Enfoque automático",
      "Micrófono estéreo integrado",
      "Corrección de luz automática",
      "Clip universal para monitor/trípode",
      "Conexión USB Plug and Play"
    ],
    "specifications": {
      "Resolución": "1920x1080p a 30fps",
      "Tipo de Enfoque": "Automático",
      "Micrófono": "Estéreo incorporado",
      "Conectividad": "USB 2.0",
      "Compatibilidad": "Windows, macOS, Chrome OS"
    }
  },
  "9": {
    "id": 9,
    "name": "Monitor curvo ultrawide",
    "price": 450000,
    "discount": 15,
    "category": "Monitores",
    "brand": "DisplayMax",
    "rating": 4.8,
    "reviews": 115,
    "stock": 20,
    "isNew": true,
    "images": [
      "../src/assets/monitor.webp"
    ],
    "description": "Sumérgete en tus juegos y películas con este monitor curvo ultrawide. Su pantalla panorámica te ofrece una experiencia visual inmersiva y un mayor espacio de trabajo para multitareas.",
    "features": [
      "Pantalla curva ultrawide de 34 pulgadas",
      "Resolución QHD (3440 x 1440)",
      "Tasa de refresco de 144Hz",
      "Tecnología FreeSync y G-Sync",
      "Panel VA con colores vibrantes",
      "Diseño sin bordes para configuraciones multi-monitor"
    ],
    "specifications": {
      "Tamaño de Pantalla": "34 pulgadas",
      "Resolución": "3440 x 1440",
      "Tasa de Refresco": "144Hz",
      "Tipo de Panel": "VA",
      "Curvatura": "1500R",
      "Puertos": "HDMI, DisplayPort"
    }
  },
  "10": {
    "id": 10,
    "name": "SSD externo portátil",
    "price": 95000,
    "discount": 0,
    "category": "Almacenamiento",
    "brand": "StorageX",
    "rating": 4.7,
    "reviews": 178,
    "stock": 50,
    "isNew": false,
    "images": [
      "../src/assets/ssd-externo.webp"
    ],
    "description": "Lleva tus archivos a donde vayas con este SSD portátil. Ofrece velocidades de transferencia ultrarrápidas en un diseño compacto y resistente a golpes y vibraciones.",
    "features": [
      "Velocidades de lectura de hasta 540MB/s",
      "Conexión USB 3.2 Gen 2 Type-C",
      "Diseño compacto y duradero",
      "Resistente a golpes y vibraciones",
      "Compatible con PC, Mac, consolas y smartphones"
    ],
    "specifications": {
      "Capacidad": "1TB",
      "Tipo de Disco": "SSD",
      "Interfaz": "USB 3.2 Gen 2 (USB-C)",
      "Velocidad de Lectura": "540 MB/s",
      "Dimensiones": "90 x 50 x 10 mm",
      "Peso": "50g"
    }
  },
  "11": {
    "id": 11,
    "name": "Smartwatch deportivo",
    "price": 150000,
    "discount": 10,
    "category": "Wearables",
    "brand": "FitTech",
    "rating": 4.6,
    "reviews": 250,
    "stock": 35,
    "isNew": true,
    "images": [
      "../src/assets/reloj.webp"
    ],
    "description": "Monitorea tu salud y actividad física con este smartwatch deportivo. Cuenta con múltiples modos de deporte, medición de frecuencia cardíaca y oxígeno en sangre, y notificaciones de tu smartphone.",
    "features": [
      "Monitor de frecuencia cardíaca y SpO2",
      "GPS integrado",
      "Múltiples modos de deporte",
      "Notificaciones inteligentes",
      "Resistencia al agua",
      "Batería de larga duración"
    ],
    "specifications": {
      "Pantalla": "AMOLED de 1.3 pulgadas",
      "Sensores": "Frecuencia cardíaca, SpO2, Acelerómetro",
      "Batería": "Hasta 10 días",
      "Resistencia": "5 ATM",
      "Compatibilidad": "Android, iOS"
    }
  },
  "12": {
    "id": 12,
    "name": "Pulsera fitness tracker",
    "price": 50000,
    "discount": 5,
    "category": "Wearables",
    "brand": "TrackFit",
    "rating": 4.5,
    "reviews": 180,
    "stock": 90,
    "isNew": false,
    "images": [
      "../src/assets/reloj2.webp"
    ],
    "description": "Una pulsera elegante y funcional para seguir tu actividad diaria. Cuenta pasos, monitorea tu sueño y recibe notificaciones de tu teléfono, todo en un diseño ligero y discreto.",
    "features": [
      "Contador de pasos y distancia",
      "Monitor de sueño",
      "Notificaciones de llamadas y mensajes",
      "Batería de hasta 14 días",
      "Pantalla OLED"
    ],
    "specifications": {
      "Pantalla": "OLED monocromática",
      "Batería": "Hasta 14 días",
      "Conectividad": "Bluetooth 4.2",
      "Peso": "20g"
    }
  },
  "13": {
    "id": 13,
    "name": "Altavoz Bluetooth portátil",
    "price": 75000,
    "discount": 10,
    "category": "Audio",
    "brand": "AudioFlow",
    "rating": 4.7,
    "reviews": 310,
    "stock": 65,
    "isNew": true,
    "images": [
      "../src/assets/parlante.webp"
    ],
    "description": "Lleva la fiesta a cualquier lugar con este potente altavoz Bluetooth portátil. Ofrece un sonido nítido y graves profundos, con una batería que dura todo el día.",
    "features": [
      "Sonido de alta calidad y bajos potentes",
      "Conectividad Bluetooth 5.0",
      "Batería de hasta 15 horas",
      "Resistencia al agua IPX7",
      "Diseño compacto y robusto"
    ],
    "specifications": {
      "Potencia": "10W",
      "Conectividad": "Bluetooth 5.0",
      "Batería": "Hasta 15 horas",
      "Resistencia": "IPX7",
      "Dimensiones": "180 x 70 x 70 mm"
    }
  },
  "14": {
    "id": 14,
    "name": "Barra de sonido compacta",
    "price": 190000,
    "discount": 15,
    "category": "Audio",
    "brand": "Soundrens",
    "rating": 4.6,
    "reviews": 140,
    "stock": 30,
    "isNew": false,
    "images": [
      "../src/assets/parlante2.webp"
    ],
    "description": "Mejora la calidad de sonido de tu televisor sin ocupar mucho espacio. Esta barra de sonido compacta ofrece un sonido cinematográfico y se conecta fácilmente a través de Bluetooth o HDMI.",
    "features": [
      "Sonido estéreo de alta fidelidad",
      "Conectividad Bluetooth y HDMI ARC",
      "Múltiples modos de sonido (películas, música, noticias)",
      "Diseño delgado y elegante",
      "Control remoto incluido"
    ],
    "specifications": {
      "Canales de Audio": "2.0",
      "Potencia Total": "60W",
      "Conectividad": "Bluetooth, HDMI ARC, Óptica",
      "Dimensiones": "600 x 60 x 80 mm",
      "Peso": "1.5 kg"
    }
  },
  "15": {
    "id": 15,
    "name": "Proyector de bolsillo portátil",
    "price": 180000,
    "discount": 20,
    "category": "Video",
    "brand": "VividView",
    "rating": 4.4,
    "reviews": 85,
    "stock": 25,
    "isNew": true,
    "images": [
      "../src/assets/proyector.webp"
    ],
    "description": "Convierte cualquier pared en una pantalla de cine con este proyector de bolsillo. Perfecto para presentaciones, noches de cine al aire libre o para llevar a casa de amigos.",
    "features": [
      "Resolución de 1080p",
      "Tamaño de proyección de hasta 120 pulgadas",
      "Batería integrada de larga duración",
      "Puertos HDMI, USB y microSD",
      "Altavoz incorporado",
      "Diseño ultra compacto y ligero"
    ],
    "specifications": {
      "Resolución Nativa": "1920x1080p",
      "Brillo": "5000 lúmenes",
      "Tamaño de Proyección": "30-120 pulgadas",
      "Conectividad": "HDMI, USB, microSD, Wi-Fi",
      "Batería": "5000mAh"
    }
  },
  "16": {
    "id": 16,
    "name": "Micrófono USB para streaming",
    "price": 85000,
    "discount": 10,
    "category": "Audio",
    "brand": "AudioTech",
    "rating": 4.8,
    "reviews": 160,
    "stock": 40,
    "isNew": false,
    "images": [
      "../src/assets/microfono.webp"
    ],
    "description": "Graba tu voz con calidad profesional para streaming, podcasts o gaming. Este micrófono USB es fácil de usar, con un patrón de captación cardioide y un soporte de escritorio robusto.",
    "features": [
      "Grabación con calidad de estudio",
      "Conexión USB Plug and Play",
      "Patrón de captación cardioide",
      "Incluye soporte de escritorio y filtro pop",
      "Botón de mute con indicador LED"
    ],
    "specifications": {
      "Tipo de Micrófono": "Condensador",
      "Patrón Polar": "Cardioide",
      "Frecuencia de Muestreo": "48kHz",
      "Conectividad": "USB-C",
      "Compatibilidad": "Windows, macOS, PlayStation"
    }
  },
  "17": {
    "id": 17,
    "name": "Silla gamer ergonómica",
    "price": 280000,
    "discount": 20,
    "category": "Muebles de Oficina",
    "brand": "GamingGear",
    "rating": 4.7,
    "reviews": 230,
    "stock": 15,
    "isNew": true,
    "images": [
      "../src/assets/silla.webp"
    ],
    "description": "Juega o trabaja durante horas con la máxima comodidad. Esta silla gamer ergonómica ofrece soporte lumbar y cervical ajustable, reposabrazos 4D y un diseño reclinable.",
    "features": [
      "Diseño ergonómico de alto rendimiento",
      "Cojines ajustables para cuello y lumbar",
      "Reposabrazos 4D multi-ajustables",
      "Respaldo reclinable hasta 165°",
      "Base de metal robusta con ruedas silenciosas",
      "Material de cuero sintético transpirable"
    ],
    "specifications": {
      "Material": "Cuero sintético",
      "Reposabrazos": "4D",
      "Reclinación": "90° - 165°",
      "Peso máximo soportado": "150 kg"
    }
  },
  "18": {
    "id": 18,
    "name": "Hub USB-C con múltiples puertos",
    "price": 55000,
    "discount": 5,
    "category": "Accesorios",
    "brand": "TechHub",
    "rating": 4.6,
    "reviews": 110,
    "stock": 75,
    "isNew": false,
    "images": [
      "../src/assets/hdmi.webp"
    ],
    "description": "Expande la conectividad de tu laptop con este hub USB-C compacto. Convierte un solo puerto USB-C en múltiples puertos para transferir datos, conectar pantallas y más.",
    "features": [
      "Puertos USB-A, HDMI, SD y microSD",
      "Soporte de video 4K",
      "Carga de hasta 100W",
      "Diseño de aluminio y compacto",
      "Transferencia de datos de alta velocidad"
    ],
    "specifications": {
      "Puertos": "HDMI 4K, 2x USB 3.0, lector SD/microSD, USB-C PD",
      "Velocidad de Transferencia": "5 Gbps",
      "Material": "Aleación de aluminio",
      "Dimensiones": "110 x 45 x 15 mm"
    }
  },
  "19": {
    "id": 19,
    "name": "Disco duro NAS doméstico",
    "price": 320000,
    "discount": 10,
    "category": "Almacenamiento",
    "brand": "StoreHO",
    "rating": 4.5,
    "reviews": 90,
    "stock": 20,
    "isNew": true,
    "images": [
      "http://googleusercontent.com/image_generation_content/20"
    ],
    "description": "Centraliza y protege tus datos en la nube personal de tu hogar. Este NAS (Network Attached Storage) te permite acceder a tus archivos desde cualquier dispositivo, crear copias de seguridad automáticas y compartir contenido multimedia fácilmente.",
    "features": [
      "Almacenamiento en red para el hogar",
      "Configuración de RAID para protección de datos",
      "Acceso remoto a archivos",
      "Transmisión de contenido multimedia (Plex, DLNA)",
      "Copias de seguridad automáticas de PC y Mac",
      "Fácil de usar y configurar"
    ],
    "specifications": {
      "Bahías de disco": "2 bahías",
      "Capacidad Máxima": "20TB (10TB por bahía)",
      "Conectividad": "Ethernet Gigabit, USB 3.0",
      "Sistemas Operativos": "Compatible con Windows, macOS, Linux",
      "Dimensiones": "165 x 100 x 225.5 mm"
    }
  }
}

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

  // Generar productos relacionados basados en el producto actual
  const generateRelatedProducts = (currentProductId) => {
    const allProducts = Object.values(productsDatabase);
    const related = allProducts
      .filter(p => p.id !== currentProductId)
      .slice(0, 4)
      .map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        category: p.category,
        image: p.images[0],
        discount: p.discount,
        isNew: p.isNew
      }));
    return related;
  };

  // Cargar producto basado en ID
  useEffect(() => {
    setLoading(true);
    
    // Simular llamada a API
    setTimeout(() => {
      const productId = parseInt(id);
      const productData = productsDatabase[productId];
      
      if (productData) {
        setProduct(productData);
        setRelatedProducts(generateRelatedProducts(productId));
        setSelectedImage(0); // Reset selected image when product changes
        setQuantity(1); // Reset quantity when product changes
        setActiveTab('description'); // Reset active tab when product changes
      } else {
        setProduct(null);
      }
      
      setLoading(false);
    }, 800);
  }, [id]); // Dependencia del ID para recargar cuando cambie

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
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
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
          <p className="text-gray-600 mb-6">
            El producto con ID "{id}" no existe en nuestra base de datos.
          </p>
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
                {product.reviews} reseñas verificadas
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
                  <span className="text-green-600 font-semibold">Disponible para envío inmediato</span>
                  <span className="text-gray-500">({product.stock} unidades disponibles)</span>
                </div>
              ) : (
                <span className="text-red-600 font-semibold">Producto agotado</span>
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
                <span>Guardar</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <FiShare2 className="w-5 h-5" />
                <span>Compartir</span>
              </button>
            </div>

            {/* Características principales */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Lo que hace especial a este producto:
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
                <span className="text-xs text-gray-500">Compras +$150.000</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FiShield className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-gray-800">Garantía</span>
                <span className="text-xs text-gray-500">24 meses</span>
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
              También te puede interesar
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

export default ProductDetail