import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../redux/wishlistSlice";
import { addItemToCart } from "../redux/cartSlice";
import { addToast } from "../redux/toastSlice";
import "../styles/Wishlist.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.wishlist.favorites);

  const handleMoveToCart = (plant) => {
    dispatch(addItemToCart(plant));
    dispatch(toggleFavorite(plant));
    dispatch(addToast({
      message: `${plant.name} movido al carrito`,
      type: 'success',
      duration: 2000
    }));
  };

  const handleRemove = (plant) => {
    dispatch(toggleFavorite(plant));
    dispatch(addToast({
      message: `${plant.name} eliminado de favoritos`,
      type: 'info',
      duration: 2000
    }));
  };

  const handleShare = () => {
    const shareText = `Mira mi lista de plantas favoritas en Paradise Nursery!`;
    if (navigator.share) {
      navigator.share({
        title: 'Mi Wishlist - Paradise Nursery',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      dispatch(addToast({
        message: 'Link copiado al portapapeles',
        type: 'success',
        duration: 2000
      }));
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="wishlist-container">
        <div className="wishlist-empty">
          <div className="empty-wishlist-icon">❤️</div>
          <h2>Tu lista de favoritos está vacía</h2>
          <p>Explora nuestra colección y añade tus plantas favoritas</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/products')}
          >
            Explorar Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <div>
          <h1 className="wishlist-title">❤️ Mis Favoritos</h1>
          <p className="wishlist-count">{favorites.length} {favorites.length === 1 ? 'planta' : 'plantas'}</p>
        </div>
        <button
          className="btn btn-outline share-btn"
          onClick={handleShare}
        >
          🔗 Compartir Lista
        </button>
      </div>

      <div className="wishlist-grid">
        {favorites.map((plant, idx) => (
          <div className="wishlist-card" key={`${plant.name}-${idx}`}>
            <div
              className="wishlist-image-container"
              onClick={() => navigate(`/product/${plant.name.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <img src={plant.image} alt={plant.name} />
            </div>

            <div className="wishlist-content">
              <h3 className="wishlist-product-name">{plant.name}</h3>
              <p className="wishlist-description">{plant.description}</p>

              {plant.rating && (
                <div className="wishlist-rating">
                  <span className="stars">
                    {'★'.repeat(Math.floor(plant.rating))}
                    {'☆'.repeat(5 - Math.floor(plant.rating))}
                  </span>
                  <span className="rating-value">{plant.rating}</span>
                </div>
              )}

              <p className="wishlist-cost">{plant.cost}</p>

              <div className="wishlist-actions">
                <button
                  className="btn btn-primary move-to-cart-btn"
                  onClick={() => handleMoveToCart(plant)}
                >
                  🛒 Mover al Carrito
                </button>
                <button
                  className="btn btn-outline remove-btn"
                  onClick={() => handleRemove(plant)}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
