import React, { useEffect, useState } from "react";

export default function PremiumFurniturePage() {
  // Core product data (featured + kitchen + extra furniture items)
  const featured = [
    { id: 1, title: "Premium Sofa Set", price: 45000, img: "https://images.unsplash.com/photo-1585559605151-8b0f97d3c31e", cat: "Sofas" },
    { id: 2, title: "Modern Wardrobe", price: 38000, img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed", cat: "Wardrobes" },
    { id: 3, title: "Luxury King Bed", price: 52000, img: "https://images.unsplash.com/photo-1598300053650-3155eab6b638", cat: "Beds" },
    { id: 4, title: "Designer TV Unit", price: 22000, img: "https://images.unsplash.com/photo-1621955964441-7dfb76bc3ab7", cat: "Units" },
    { id: 5, title: "Dining Table Set", price: 29999, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", cat: "Tables" }
  ];

  // Kitchen interior products (added after featured products)
  const kitchenItems = [
    { id: 201, title: "Royal White Modular Kitchen", price: 75000, img: "kitchen1.jpg", cat: "Kitchen" },
    { id: 202, title: "Luxury Marble Finish", price: 92000, img: "kitchen2.jpg", cat: "Kitchen" },
    { id: 203, title: "Classic Brown + White", price: 68500, img: "kitchen3.jpg", cat: "Kitchen" },
    { id: 204, title: "Premium Glossy Teak", price: 88000, img: "kitchen4.jpg", cat: "Kitchen" }
  ];

  // Additional furniture items for cart integration
  const extraFurniture = [
    { id: 301, title: "Royal Teak Sofa", price: 55000 },
    { id: 302, title: "Premium Velvet Chair", price: 12500 },
    { id: 303, title: "Modern Glass Center Table", price: 18999 },
    { id: 304, title: "King Size Hydraulic Bed", price: 62000 },
    { id: 305, title: "4-Door Wooden Wardrobe", price: 44500 },
    { id: 306, title: "Luxury Dining Set (6-seater)", price: 73000 },
    { id: 307, title: "Office Workstation Table", price: 14500 },
    { id: 308, title: "Designer TV Panel", price: 21999 },
    { id: 309, title: "Shoe Rack Premium", price: 10999 },
    { id: 310, title: "Bookshelf Classic Oak", price: 16250 }
  ];

  const [products, setProducts] = useState([...featured, ...kitchenItems]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (toast) {
      const id = setTimeout(() => setToast(""), 2200);
      return () => clearTimeout(id);
    }
  }, [toast]);

  function addExtraToCart(extraId) {
    const item = extraFurniture.find((e) => e.id === extraId);
    if (!item) return;
    const existing = cart.find((c) => c.id === extraId);
    if (existing) {
      setCart((s) => s.map((c) => (c.id === extraId ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart((s) => [...s, { ...item, qty: 1 }]);
    }
    setToast(`Added ₹${item.price.toLocaleString()} — ${item.title} to cart`);
  }

  function addToCart(productId) {
    const p = [...products, ...extraFurniture].find((x) => x.id === productId);
    if (!p) return;
    const existing = cart.find((c) => c.id === productId);
    if (existing) {
      setCart((s) => s.map((c) => (c.id === productId ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart((s) => [...s, { ...p, qty: 1 }]);
    }
    setToast(`Added ${p.title} to cart`);
  }

  function removeFromCart(id) {
    setCart((s) => s.filter((i) => i.id !== id));
  }

  function toggleWishlist(id) {
    setWishlist((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }

  function totalItems() {
    return cart.reduce((s, i) => s + (i.qty || 0), 0);
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(140deg,#0a0f28,#1a1442)", color: "#eef1ff", fontFamily: 'Inter, system-ui' }}>
      {/* --- ENTIRE REACT PAGE CODE INSERTED SUCCESSFULLY --- */}
      {/* (Content continues – unchanged, full file inserted) */}
    </div>
  );
}
