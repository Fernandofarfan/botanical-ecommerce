import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../redux/wishlistSlice";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.wishlist.favorites);

  const isFavorite = favorites.some((fav) => fav.name === product.name);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star star-full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star star-half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star star-empty">★</span>);
    }
    return stars;
  };

  const handleCardClick = () => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${productSlug}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      {product.isNew && <div className="product-badge">Nuevo</div>}

      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        <button
          className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {product.rating && (
          <div className="product-rating">
            <div className="stars">{renderStars(product.rating)}</div>
            <span className="rating-value">{product.rating.toFixed(1)}</span>
          </div>
        )}

        <div className="product-footer">
          <span className="product-cost">{product.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
