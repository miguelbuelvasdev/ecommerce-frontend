
# TechTronic E-Commerce Frontend

Proyecto profesional de tienda online desarrollado con **React**, **Vite** y **TailwindCSS**. Incluye funcionalidades avanzadas de catálogo, carrito, checkout, filtros, navegación y diseño responsivo, pensado para una experiencia de usuario moderna y escalable.

---

## Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Principales Funcionalidades](#principales-funcionalidades)
- [Guía de Uso](#guía-de-uso)
- [Contacto y Soporte](#contacto-y-soporte)

---

## Descripción General

TechTronic es una tienda online de productos electrónicos, periféricos y accesorios, con catálogo filtrable, carrito persistente, proceso de compra intuitivo y diseño profesional. El frontend está optimizado para velocidad, SEO y usabilidad, integrando componentes reutilizables y gestión de estado global.

---

## Instalación y Configuración

1. **Clona el repositorio:**
	```bash
	git clone https://github.com/tuusuario/ecommerce-frontend.git
	cd ecommerce-frontend
	```
2. **Instala dependencias:**
	```bash
	npm install
	```
3. **Inicia el servidor de desarrollo:**
	```bash
	npm run dev
	```
4. Accede a `http://localhost:5173` en tu navegador.

---

## Estructura del Proyecto

```
├── public/                # Archivos públicos y estáticos
├── src/
│   ├── assets/            # Imágenes y recursos multimedia
│   ├── components/        # Componentes reutilizables (Header, Footer, CartDrawer, etc.)
│   ├── context/           # Contextos globales (CartContext)
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Páginas principales (Home, Products, ProductDetail, Checkout, About, Contact)
│   ├── styles/            # Archivos de estilos
│   └── App.jsx            # Componente raíz
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de TailwindCSS
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

---

## Tecnologías Utilizadas

- **React 19**: UI declarativa y componentes reutilizables
- **Vite**: Bundler ultrarrápido y HMR
- **TailwindCSS**: Utilidades CSS para diseño responsivo
- **React Router DOM**: Navegación SPA
- **ESLint**: Linter y buenas prácticas
- **React Icons / Lucide React**: Iconografía moderna
- **PropTypes**: Tipado de props

---

## Principales Funcionalidades

- **Catálogo de productos** con filtros por categoría, precio y búsqueda
- **Detalle de producto** con galería, especificaciones y productos relacionados
- **Carrito de compras** persistente (localStorage), edición de cantidades y resumen de compra
- **Checkout** multistep: envío, pago y confirmación
- **Navegación SPA** con rutas protegidas y breadcrumbs
- **Componentes reutilizables**: Header, Footer, CartDrawer, ProductCard, etc.
- **Página de contacto** con formulario y mapa embebido
- **Página "Nosotros"** con historia, valores, equipo y estadísticas
- **Diseño responsivo** y accesible para móviles y desktop
- **Notificaciones y feedback** para acciones del usuario

---

## Guía de Uso

1. **Explora el catálogo:** Filtra productos por categoría, precio o búsqueda.
2. **Agrega productos al carrito:** El carrito se muestra como un panel lateral y persiste entre sesiones.
3. **Edita cantidades o elimina productos:** Desde el CartDrawer o el resumen de compra.
4. **Realiza el checkout:** Completa los pasos de envío, pago y confirmación. El carrito se vacía al finalizar el pedido.
5. **Consulta información adicional:** En las páginas de "Nosotros" y "Contacto".

---

## Contacto y Soporte

- **Correo:** contacto@miguelbuelvasdev.com
- **Teléfono:** +57 300 901 6173
- **Ubicación:** El Carmen de Bolívar, Colombia
- [LinkedIn](https://miguelbuelvasdev.com/) | [Portafolio](https://miguelbuelvasdev.com/)

¿Tienes dudas, sugerencias o quieres colaborar? ¡Contáctanos!

---

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y adaptarlo libremente para tus necesidades.
