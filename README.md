# 🌿 Paradise Nursery - Tienda de Plantas Online

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Paradise Nursery es una moderna tienda de plantas en línea que permite a los usuarios explorar, buscar y comprar una amplia variedad de plantas categorizadas según sus beneficios y características de mantenimiento.

## ✨ Características Principales

### 🎨 Diseño Moderno
- **UI Premium**: Diseño moderno con gradientes vibrantes y efectos glassmorphism
- **Animaciones Suaves**: Transiciones y micro-interacciones en toda la aplicación
- **Modo Oscuro**: Soporte completo para tema oscuro con transiciones suaves
- **Responsive**: Diseño totalmente adaptable a móviles, tablets y desktop
- **Tipografía Moderna**: Fuentes Google (Inter, Outfit, Roboto Slab)

### 🛒 Funcionalidades de Compra
- **Carrito de Compras**: Sistema completo con persistencia de datos
- **Contador en Navbar**: Badge animado mostrando items en el carrito
- **Lista de Favoritos**: Guarda tus plantas favoritas con un click
- **Notificaciones Toast**: Feedback visual para todas las acciones del usuario

### 🔍 Búsqueda y Filtrado
- **Búsqueda en Tiempo Real**: Con debouncing para mejor rendimiento
- **Filtros por Categoría**: 
  - Plantas Purificadoras de Aire
  - Plantas Aromáticas
  - Plantas Repelentes de Insectos
  - Plantas Medicinales
  - Plantas de Bajo Mantenimiento
- **Ordenamiento**: Por precio (ascendente/descendente), nombre, calificación
- **Persistencia de Filtros**: Los filtros se guardan en localStorage

### ⭐ Sistema de Calificaciones
- **Ratings Visuales**: Sistema de estrellas para cada producto
- **Badges**: Indicadores de productos nuevos
- **Popularidad**: Datos de popularidad para mejor ordenamiento

### 🔐 Autenticación
- **Sistema de Login**: Autenticación de usuarios
- **Panel de Admin**: Área administrativa para usuarios autorizados
- **Rutas Protegidas**: Seguridad en rutas sensibles

## 🚀 Tecnologías Utilizadas

### Core
- **React 18.3.1**: Biblioteca principal de UI
- **Vite 5.3.1**: Build tool ultra-rápido
- **React Router DOM 6.23.0**: Navegación y rutas

### Estado y Datos
- **Redux Toolkit 2.2.6**: Gestión de estado global
- **Redux Persist 6.0.0**: Persistencia del carrito y favoritos
- **React Redux 9.2.0**: Integración React-Redux

### Desarrollo
- **ESLint**: Linting y calidad de código
- **gh-pages**: Despliegue automático

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/fernandofarfan/tienda-de-plantas.git

# Navegar al directorio
cd tienda-de-plantas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 🛠 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Crea build de producción
npm run preview      # Preview del build de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint

# Despliegue
npm run predeploy    # Pre-build para despliegue
npm run deploy       # Despliega a GitHub Pages
```

## 📁 Estructura del Proyecto

```
tienda-de-plantas/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/          # Componentes React
│   │   ├── AboutUs.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminRoute.jsx
│   │   ├── CartItems.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── PlantList.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductFilter.jsx
│   │   ├── ProductList.jsx
│   │   ├── ReviewSystem.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SortControls.jsx
│   │   └── Toast.jsx
│   ├── context/             # Context API
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/               # Páginas
│   │   └── Wishlist.jsx
│   ├── redux/               # Redux store y slices
│   │   ├── authSlice.js
│   │   ├── cartSlice.js
│   │   ├── plantsArray.js
│   │   ├── reviewSlice.js
│   │   ├── store.js
│   │   ├── toastSlice.js
│   │   └── wishlistSlice.js
│   ├── styles/              # Archivos CSS
│   │   ├── AboutUs.css
│   │   ├── CartItems.css
│   │   ├── DarkMode.css
│   │   ├── Login.css
│   │   ├── Navbar.css
│   │   ├── PlantList.css
│   │   ├── ProductCard.css
│   │   ├── ProductFilter.css
│   │   ├── ProductList.css
│   │   ├── ReviewSystem.css
│   │   ├── SearchBar.css
│   │   ├── SortControls.css
│   │   ├── Toast.css
│   │   └── Wishlist.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css            # Sistema de diseño global
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño completo basado en CSS Variables:

### Paleta de Colores
- **Primary**: Tonos verdes para tema de naturaleza
- **Secondary**: Tonos púrpura para acentos
- **Accent**: Tonos naranja para llamadas a la acción
- **Semantic**: Success, Warning, Error, Info

### Espaciado
Sistema de espaciado consistente desde `--space-xs` (0.25rem) hasta `--space-3xl` (4rem)

### Tipografía
- **Display**: Roboto Slab para títulos
- **Primary**: Inter para texto general
- **Secondary**: Outfit para elementos especiales

## 🌟 Características Destacadas

### Toast Notifications
Sistema de notificaciones no intrusivas con:
- Diferentes tipos (success, error, warning, info)
- Auto-dismiss configurable
- Animaciones de entrada/salida
- Diseño glassmorphism

### Product Cards
Cards de productos premium con:
- Imágenes con efecto zoom al hover
- Sistema de favoritos animado
- Ratings con estrellas
- Badge de "Nuevo" para productos recientes
- Sombras elevadas y transiciones suaves

### Navbar Sticky
Barra de navegación fija con:
- Contador de carrito animado
- Efecto glassmorphism
- Links con animaciones hover
- Totalmente responsive

## 📱 Responsive Design

El proyecto está optimizado para:
- 📱 **Mobile**: < 768px
- 💻 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: > 1024px

## 🔮 Futuras Mejoras

- [ ] Página de Checkout completa
- [ ] Filtro por rango de precio
- [ ] Integración con pasarela de pago
- [ ] Sistema de reviews de usuarios
- [ ] Wishlist compartible
- [ ] Comparador de productos
- [ ] Recomendaciones personalizadas

## 👨‍💻 Autor

**Fernando Farfán**
- GitHub: [@fernandofarfan](https://github.com/fernandofarfan)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- Imágenes de plantas de [Pixabay](https://pixabay.com) y [Unsplash](https://unsplash.com)
- Iconos de emojis nativos
- Inspiración de diseño de tiendas modernas de e-commerce

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
