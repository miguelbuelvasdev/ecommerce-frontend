import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

// Provider del carrito
export const CartProvider = ({ children }) => {
  // Estado del carrito - inicializar desde localStorage si existe
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Estado para mostrar/ocultar el carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Si existe, actualizar la cantidad
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Si no existe, agregar nuevo producto
      return [...prevItems, { ...product, quantity }];
    });

    // Mostrar notificación (opcional)
    showNotification('Producto agregado al carrito');
  };

  // Función para eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    showNotification('Producto eliminado del carrito');
  };

  // Función para actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
    showNotification('Carrito vaciado');
  };

  // Calcular total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.discount
        ? item.price * (1 - item.discount / 100)
        : item.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  // Calcular cantidad total de items
  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener subtotal (sin descuentos)
  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  // Calcular total de descuentos
  const getTotalDiscount = () => {
    return cartItems.reduce((total, item) => {
      if (item.discount) {
        const discountAmount = (item.price * item.discount / 100) * item.quantity;
        return total + discountAmount;
      }
      return total;
    }, 0);
  };

  // Función para mostrar notificaciones (simple)
  const showNotification = (message) => {
    // Aquí podrías implementar un sistema de notificaciones más elaborado
    console.log(message);
    // Por ejemplo, podrías usar una librería como react-toastify
  };

  // Verificar si un producto está en el carrito
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Obtener la cantidad de un producto específico en el carrito
  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Valor del contexto
  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    getCartSubtotal,
    getTotalDiscount,
    isInCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
