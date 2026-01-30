"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Wine } from '@/lib/data';

interface CartItem extends Wine {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (wine: Wine, quantity: number) => void;
  removeFromCart: (id: string) => void;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (wine: Wine, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === wine.id);
      if (existing) {
        return prev.map(item => 
          item.id === wine.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...wine, quantity }];
    });
    setIsCartOpen(true); // Open the drawer automatically when adding
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};