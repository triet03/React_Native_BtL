import React, { createContext, useState, useContext } from 'react';

// Context cho giỏ hàng
const CartContext = createContext();

// Context cho danh sách yêu thích
const FavoritesContext = createContext();

// Cart Provider để quản lý giỏ hàng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);  // Trạng thái cho yêu thích

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Tính tổng giá trị giỏ hàng
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
  };

  // Thêm sản phẩm vào danh sách yêu thích
  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  // Lấy danh sách sản phẩm yêu thích
  const getFavorites = () => {
    return favorites;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalPrice }}>
      <FavoritesContext.Provider value={{ favorites, addToFavorites, getFavorites }}>
        {children}
      </FavoritesContext.Provider>
    </CartContext.Provider>
  );
};

// Custom hook cho giỏ hàng
export const useCart = () => useContext(CartContext);

// Custom hook cho yêu thích
export const useFavorites = () => useContext(FavoritesContext);
