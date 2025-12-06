import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="not-found-animation">
                    <div className="plant-pot">🪴</div>
                    <div className="error-number">404</div>
                </div>

                <h1 className="not-found-title">¡Oops! Página no encontrada</h1>
                <p className="not-found-message">
                    Parece que esta planta se perdió en el jardín.
                    No pudimos encontrar la página que buscas.
                </p>

                <div className="not-found-actions">
                    <Link to="/products" className="btn btn-primary">
                        🌿 Ver Productos
                    </Link>
                    <Link to="/" className="btn btn-outline">
                        🏠 Ir al Inicio
                    </Link>
                </div>

                <div className="helpful-links">
                    <h3>Enlaces útiles:</h3>
                    <ul>
                        <li><Link to="/products">Explorar Productos</Link></li>
                        <li><Link to="/cart">Ver Carrito</Link></li>
                        <li><Link to="/wishlist">Mis Favoritos</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
