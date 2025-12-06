import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="hero-section">
            <div
                className="hero-background"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <span className="hero-badge">🌿 Bienvenido a Paradise Nursery</span>
                    <h1 className="hero-title">
                        Transforma tu hogar con
                        <span className="hero-highlight"> plantas increíbles</span>
                    </h1>
                    <p className="hero-description">
                        Descubre nuestra colección curada de plantas purificadoras, aromáticas y de bajo mantenimiento.
                        Perfectas para cualquier espacio y nivel de experiencia.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-primary btn-large">
                            Explorar Colección
                        </Link>
                        <Link to="/about" className="btn btn-outline btn-large">
                            Conocer Más
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Plantas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Categorías</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.8★</span>
                            <span className="stat-label">Calificación</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="floating-card card-1">
                        <img src="https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg" alt="Plant 1" />
                        <div className="card-badge">Popular</div>
                    </div>
                    <div className="floating-card card-2">
                        <img src="https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg" alt="Plant 2" />
                        <div className="card-badge">Nuevo</div>
                    </div>
                    <div className="floating-card card-3">
                        <img src="https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg" alt="Plant 3" />
                        <div className="card-badge">Oferta</div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
};

export default Hero;
