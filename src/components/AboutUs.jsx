import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">Sobre Paradise Nursery</h1>
        <p className="about-subtitle">
          Llevando la naturaleza a tu hogar desde 2020
        </p>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <div className="section-content">
          <h2>Nuestra Historia 📖</h2>
          <p>
            Paradise Nursery nació de una pasión compartida por las plantas y el deseo de hacer que la jardinería sea accesible para todos. Comenzamos como un pequeño vivero local y hemos crecido hasta convertirnos en una tienda online de confianza que sirve a miles de amantes de las plantas en todo el país.
          </p>
          <p>
            Cada planta en nuestro catálogo es cuidadosamente seleccionada y cultivada con amor, asegurando que llegue a tu hogar en perfectas condiciones.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-section values-section">
        <h2>Nuestros Valores 🌱</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h3>Calidad</h3>
            <p>Solo ofrecemos plantas de la más alta calidad, cultivadas con cuidado y atención.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">♻️</div>
            <h3>Sostenibilidad</h3>
            <p>Comprometidos con prácticas ecológicas y empaques reciclables.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💚</div>
            <h3>Pasión</h3>
            <p>Amamos lo que hacemos y queremos compartir esa pasión contigo.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Servicio</h3>
            <p>Tu satisfacción es nuestra prioridad. Estamos aquí para ayudarte.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section team-section">
        <h2>Nuestro Equipo 👥</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍🌾</div>
            <h3>Carlos Rodríguez</h3>
            <p className="member-role">Fundador & CEO</p>
            <p className="member-bio">Experto en botánica con 15 años de experiencia.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🌾</div>
            <h3>María González</h3>
            <p className="member-role">Directora de Operaciones</p>
            <p className="member-bio">Especialista en logística y atención al cliente.</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h3>Juan Martínez</h3>
            <p className="member-role">Jefe de Cultivo</p>
            <p className="member-bio">Maestro jardinero certificado.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-section stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Variedades de Plantas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Clientes Felices</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8★</div>
            <div className="stat-label">Calificación Promedio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Tasa de Satisfacción</div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-section cta-section">
        <h2>¿Tienes Preguntas?</h2>
        <p>Estamos aquí para ayudarte en tu viaje verde.</p>
        <div className="cta-buttons">
          <a href="mailto:info@paradisenursery.com" className="btn btn-primary">
            📧 Contáctanos
          </a>
          <a href="/products" className="btn btn-outline">
            🌿 Ver Productos
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
