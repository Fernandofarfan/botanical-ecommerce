import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { selectTotalItems } from "../redux/cartSlice";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const totalItems = useSelector(selectTotalItems);

  return (
    <nav className="navbar">
      <h3 className="navbar-title">🌿 Paradise Nursery</h3>
      <div className="navbar-links">
        <Link to="/products" className="nav-link">Productos</Link>
        <Link to="/about" className="nav-link">Nosotros</Link>
        <Link to="/wishlist" className="nav-link">❤️ Favoritos</Link>
        <Link to="/cart" className="nav-link cart-link">
          🛒 Carrito
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        {user && user.role === "admin" && <Link to="/admin" className="nav-link">Admin</Link>}
        {user ? (
          <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
        ) : (
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
