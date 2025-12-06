import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToast } from "../redux/toastSlice";
import "../styles/ReviewForm.css";

const ReviewForm = ({ productName, onSubmit }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        rating: 5,
        title: "",
        comment: "",
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.comment || !formData.name) {
            dispatch(addToast({
                message: "Por favor completa todos los campos requeridos",
                type: "error",
                duration: 3000
            }));
            return;
        }

        const review = {
            ...formData,
            productName,
            date: new Date().toISOString(),
            helpful: 0,
            notHelpful: 0
        };

        onSubmit(review);

        dispatch(addToast({
            message: "¡Gracias por tu review!",
            type: "success",
            duration: 3000
        }));

        // Reset form
        setFormData({
            rating: 5,
            title: "",
            comment: "",
            name: "",
            email: ""
        });
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="review-form-title">Escribe una Review</h3>

            {/* Rating */}
            <div className="form-group">
                <label>Calificación *</label>
                <div className="star-rating-input">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            className={`star-btn ${star <= formData.rating ? 'active' : ''}`}
                            onClick={() => setFormData({ ...formData, rating: star })}
                        >
                            ★
                        </button>
                    ))}
                </div>
            </div>

            {/* Title */}
            <div className="form-group">
                <label htmlFor="title">Título de la Review *</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Resume tu experiencia"
                    required
                />
            </div>

            {/* Comment */}
            <div className="form-group">
                <label htmlFor="comment">Tu Review *</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu experiencia con esta planta..."
                    rows="5"
                    required
                />
            </div>

            {/* Name */}
            <div className="form-group">
                <label htmlFor="name">Tu Nombre *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                />
            </div>

            {/* Email */}
            <div className="form-group">
                <label htmlFor="email">Email (opcional)</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                />
            </div>

            <button type="submit" className="btn btn-primary submit-review-btn">
                Publicar Review
            </button>
        </form>
    );
};

export default ReviewForm;
