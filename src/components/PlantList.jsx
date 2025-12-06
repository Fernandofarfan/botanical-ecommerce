import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "./Hero";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import { addItemToCart } from "../redux/cartSlice";
import { addToast } from "../redux/toastSlice";
import "../styles/PlantList.css";

const PlantList = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart(plant));
    dispatch(addToast({
      message: `${plant.name} añadido al carrito`,
      type: 'success',
      duration: 2000
    }));
  };

  return (
    <>
      <Hero />
      <div className="plant-list-container">
        <div className="plant-list-header">
          <h1 className="plant-list-title">Nuestra Colección de Plantas 🌱</h1>
          <p className="plant-list-subtitle">
            Descubre plantas perfectas para tu hogar y jardín
          </p>
        </div>

        <ProductFilter setFilteredProducts={setFilteredProducts} />

        {filteredProducts.length > 0 ? (
          <>
            <div className="results-count">
              Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'planta' : 'plantas'}
            </div>
            <div className="product-grid">
              {filteredProducts.map((plant, idx) => (
                <div className="product-card-wrapper" key={`${plant.name}-${idx}`}>
                  <ProductCard product={plant} />
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                  >
                    🛒 Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3>No se encontraron plantas</h3>
            <p>Intenta ajustar tus filtros de búsqueda</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PlantList;
