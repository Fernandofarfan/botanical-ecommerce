import React, { useState } from "react";
import "../styles/ReviewList.css";

const ReviewList = ({ reviews = [] }) => {
    const [sortBy, setSortBy] = useState("recent");
    const [helpfulVotes, setHelpfulVotes] = useState({});

    const sortedReviews = [...reviews].sort((a, b) => {
        switch (sortBy) {
            case "recent":
                return new Date(b.date) - new Date(a.date);
            case "helpful":
                return (b.helpful || 0) - (a.helpful || 0);
            case "rating-high":
                return b.rating - a.rating;
            case "rating-low":
                return a.rating - b.rating;
            default:
                return 0;
        }
    });

    const handleVote = (reviewId, type) => {
        setHelpfulVotes({
            ...helpfulVotes,
            [reviewId]: type
        });
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>
                ★
            </span>
        ));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (reviews.length === 0) {
        return (
            <div className="reviews-empty">
                <p>Aún no hay reviews. ¡Sé el primero en escribir una!</p>
            </div>
        );
    }

    return (
        <div className="review-list-container">
            <div className="review-list-header">
                <h3>Reviews de Clientes ({reviews.length})</h3>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                >
                    <option value="recent">Más Recientes</option>
                    <option value="helpful">Más Útiles</option>
                    <option value="rating-high">Mayor Calificación</option>
                    <option value="rating-low">Menor Calificación</option>
                </select>
            </div>

            <div className="reviews-list">
                {sortedReviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-header">
                            <div className="review-author">
                                <div className="author-avatar">
                                    {review.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{review.name}</h4>
                                    <p className="review-date">{formatDate(review.date)}</p>
                                </div>
                            </div>
                            <div className="review-rating">
                                {renderStars(review.rating)}
                            </div>
                        </div>

                        <h4 className="review-title">{review.title}</h4>
                        <p className="review-comment">{review.comment}</p>

                        <div className="review-footer">
                            <div className="helpful-section">
                                <span className="helpful-label">¿Te resultó útil?</span>
                                <div className="helpful-buttons">
                                    <button
                                        className={`helpful-btn ${helpfulVotes[index] === 'yes' ? 'active' : ''}`}
                                        onClick={() => handleVote(index, 'yes')}
                                    >
                                        👍 Sí ({review.helpful || 0})
                                    </button>
                                    <button
                                        className={`helpful-btn ${helpfulVotes[index] === 'no' ? 'active' : ''}`}
                                        onClick={() => handleVote(index, 'no')}
                                    >
                                        👎 No ({review.notHelpful || 0})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
