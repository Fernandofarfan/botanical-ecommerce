import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Info */}
                <div className="footer-section">
                    <h3 className="footer-title">🌿 Paradise Nursery</h3>
                    <p className="footer-description">
                        Tu tienda online de plantas de confianza. Llevamos la naturaleza a tu hogar desde 2020.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            📘
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            📷
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            🐦
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                            📌
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4 className="footer-subtitle">Enlaces Rápidos</h4>
                    <ul className="footer-links">
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/about">Nosotros</Link></li>
                        <li><Link to="/cart">Carrito</Link></li>
                        <li><Link to="/wishlist">Favoritos</Link></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="footer-section">
                    <h4 className="footer-subtitle">Atención al Cliente</h4>
                    <ul className="footer-links">
                        <li><a href="#faq">Preguntas Frecuentes</a></li>
                        <li><a href="#shipping">Envíos y Devoluciones</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#terms">Términos y Condiciones</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-section">
                    <h4 className="footer-subtitle">Newsletter</h4>
                    <p className="newsletter-text">
                        Suscríbete para recibir ofertas exclusivas y consejos de cuidado.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-btn">
                            Suscribirse
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p className="copyright">
                    © {currentYear} Paradise Nursery. Todos los derechos reservados.
                </p>
                <div className="footer-bottom-links">
                    <a href="#privacy">Privacidad</a>
                    <span>•</span>
                    <a href="#cookies">Cookies</a>
                    <span>•</span>
                    <a href="#legal">Legal</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
