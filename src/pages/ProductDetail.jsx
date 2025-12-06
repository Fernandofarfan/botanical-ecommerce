import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/wishlistSlice";
import { addToast } from "../redux/toastSlice";
import plantsArray from "../redux/plantsArray";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
    const { productName } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.wishlist.favorites);

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Find the product
    const allPlants = plantsArray.flatMap(category =>
        category.plants.map(plant => ({ ...plant, category: category.category }))
    );

    const product = allPlants.find(p =>
        p.name.toLowerCase().replace(/\s+/g, '-') === productName
    );

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Producto no encontrado</h2>
                <Link to="/products" className="btn btn-primary">Volver a Productos</Link>
            </div>
        );
    }

    const isFavorite = favorites.some(fav => fav.name === product.name);

    // Get related products (same category, different product)
    const relatedProducts = allPlants
        .filter(p => p.category === product.category && p.name !== product.name)
        .slice(0, 4);

    // Mock images for gallery (in real app, product would have multiple images)
    const images = [product.image, product.image, product.image];

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            dispatch(addItemToCart(product));
        }
        dispatch(addToast({
            message: `${quantity} ${product.name} añadido${quantity > 1 ? 's' : ''} al carrito`,
            type: 'success',
            duration: 2000
        }));
    };

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(product));
        dispatch(addToast({
            message: isFavorite ? 'Eliminado de favoritos' : 'Añadido a favoritos',
            type: 'info',
            duration: 2000
        }));
    };

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

    return (
        <div className="product-detail-container">
            {/* Breadcrumbs */}
            <nav className="breadcrumbs">
                <Link to="/products">Productos</Link>
                <span className="separator">›</span>
                <Link to={`/products?category=${product.category}`}>{product.category}</Link>
                <span className="separator">›</span>
                <span className="current">{product.name}</span>
            </nav>

            <div className="product-detail-content">
                {/* Image Gallery */}
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={images[selectedImage]} alt={product.name} />
                        {product.isNew && <div className="product-badge-detail">Nuevo</div>}
                    </div>
                    <div className="thumbnail-gallery">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                                onClick={() => setSelectedImage(idx)}
                            >
                                <img src={img} alt={`${product.name} ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                    <h1 className="product-detail-title">{product.name}</h1>

                    <div className="product-rating-section">
                        <div className="stars-large">{renderStars(product.rating)}</div>
                        <span className="rating-text">{product.rating} de 5</span>
                        <span className="reviews-count">(24 reviews)</span>
                    </div>

                    <div className="product-price-section">
                        <span className="product-price-large">{product.cost}</span>
                        <span className="stock-status">✓ En Stock</span>
                    </div>

                    <p className="product-description-full">{product.description}</p>

                    {/* Care Information */}
                    <div className="care-info">
                        <h3>Información de Cuidados</h3>
                        <div className="care-grid">
                            <div className="care-item">
                                <span className="care-icon">☀️</span>
                                <div>
                                    <strong>Luz</strong>
                                    <p>Luz indirecta brillante</p>
                                </div>
                            </div>
                            <div className="care-item">
                                <span className="care-icon">💧</span>
                                <div>
                                    <strong>Agua</strong>
                                    <p>Regar cuando la tierra esté seca</p>
                                </div>
                            </div>
                            <div className="care-item">
                                <span className="care-icon">🌡️</span>
                                <div>
                                    <strong>Temperatura</strong>
                                    <p>18-24°C ideal</p>
                                </div>
                            </div>
                            <div className="care-item">
                                <span className="care-icon">🪴</span>
                                <div>
                                    <strong>Dificultad</strong>
                                    <p>Fácil de cuidar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="product-actions">
                        <div className="quantity-selector">
                            <label>Cantidad:</label>
                            <div className="quantity-controls-detail">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    disabled={quantity <= 1}
                                >
                                    −
                                </button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>

                        <button
                            className="btn btn-primary add-to-cart-large"
                            onClick={handleAddToCart}
                        >
                            🛒 Añadir al Carrito
                        </button>

                        <button
                            className={`btn btn-outline favorite-btn-large ${isFavorite ? 'active' : ''}`}
                            onClick={handleToggleFavorite}
                        >
                            {isFavorite ? '❤️' : '🤍'} {isFavorite ? 'En Favoritos' : 'Añadir a Favoritos'}
                        </button>
                    </div>

                    {/* Category Badge */}
                    <div className="category-badge">
                        <strong>Categoría:</strong> {product.category}
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="related-products-section">
                    <h2>Productos Relacionados</h2>
                    <div className="related-products-grid">
                        {relatedProducts.map((relatedProduct, idx) => (
                            <div
                                key={idx}
                                className="related-product-card"
                                onClick={() => navigate(`/product/${relatedProduct.name.toLowerCase().replace(/\s+/g, '-')}`)}
                            >
                                <img src={relatedProduct.image} alt={relatedProduct.name} />
                                <h4>{relatedProduct.name}</h4>
                                <div className="stars-small">{renderStars(relatedProduct.rating)}</div>
                                <p className="related-price">{relatedProduct.cost}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
