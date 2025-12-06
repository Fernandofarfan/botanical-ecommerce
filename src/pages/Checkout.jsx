import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems, selectCartSubtotal, clearCart } from "../redux/cartSlice";
import { addToast } from "../redux/toastSlice";
import "../styles/Checkout.css";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    const subtotal = useSelector(selectCartSubtotal);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: ""
    });

    const [errors, setErrors] = useState({});

    const shipping = 5.99;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Nombre requerido";
        if (!formData.lastName.trim()) newErrors.lastName = "Apellido requerido";
        if (!formData.email.trim()) {
            newErrors.email = "Email requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.phone.trim()) newErrors.phone = "Teléfono requerido";
        if (!formData.address.trim()) newErrors.address = "Dirección requerida";
        if (!formData.city.trim()) newErrors.city = "Ciudad requerida";
        if (!formData.state.trim()) newErrors.state = "Provincia requerida";
        if (!formData.zipCode.trim()) newErrors.zipCode = "Código postal requerido";
        if (!formData.cardNumber.trim()) newErrors.cardNumber = "Número de tarjeta requerido";
        if (!formData.cardName.trim()) newErrors.cardName = "Nombre en tarjeta requerido";
        if (!formData.expiryDate.trim()) newErrors.expiryDate = "Fecha de expiración requerida";
        if (!formData.cvv.trim()) newErrors.cvv = "CVV requerido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            dispatch(addToast({
                message: "Tu carrito está vacío",
                type: "error",
                duration: 3000
            }));
            navigate("/products");
            return;
        }

        if (validateForm()) {
            // Simulate order processing
            dispatch(addToast({
                message: "¡Pedido realizado con éxito! 🎉",
                type: "success",
                duration: 4000
            }));

            dispatch(clearCart());

            // Navigate to products after a short delay
            setTimeout(() => {
                navigate("/products");
            }, 2000);
        } else {
            dispatch(addToast({
                message: "Por favor completa todos los campos",
                type: "error",
                duration: 3000
            }));
        }
    };

    if (cartItems.length === 0) {
        navigate("/cart");
        return null;
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Finalizar Compra</h1>

            <div className="checkout-content">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    {/* Shipping Information */}
                    <section className="form-section">
                        <h2 className="section-title">📦 Información de Envío</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Nombre *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={errors.firstName ? "error" : ""}
                                />
                                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Apellido *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={errors.lastName ? "error" : ""}
                                />
                                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "error" : ""}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Teléfono *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? "error" : ""}
                                />
                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Dirección *</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={errors.address ? "error" : ""}
                            />
                            {errors.address && <span className="error-message">{errors.address}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">Ciudad *</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={errors.city ? "error" : ""}
                                />
                                {errors.city && <span className="error-message">{errors.city}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="state">Provincia *</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className={errors.state ? "error" : ""}
                                />
                                {errors.state && <span className="error-message">{errors.state}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="zipCode">Código Postal *</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className={errors.zipCode ? "error" : ""}
                                />
                                {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                            </div>
                        </div>
                    </section>

                    {/* Payment Information */}
                    <section className="form-section">
                        <h2 className="section-title">💳 Información de Pago</h2>

                        <div className="form-group">
                            <label htmlFor="cardNumber">Número de Tarjeta *</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                maxLength="19"
                                className={errors.cardNumber ? "error" : ""}
                            />
                            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="cardName">Nombre en la Tarjeta *</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleChange}
                                className={errors.cardName ? "error" : ""}
                            />
                            {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="expiryDate">Fecha de Expiración *</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    placeholder="MM/AA"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    maxLength="5"
                                    className={errors.expiryDate ? "error" : ""}
                                />
                                {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="cvv">CVV *</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="123"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    maxLength="4"
                                    className={errors.cvv ? "error" : ""}
                                />
                                {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                            </div>
                        </div>
                    </section>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Confirmar Pedido - ${total.toFixed(2)}
                    </button>
                </form>

                {/* Order Summary */}
                <div className="order-summary">
                    <h2 className="summary-title">Resumen del Pedido</h2>

                    <div className="summary-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="summary-item">
                                <img src={item.image} alt={item.name} className="summary-item-image" />
                                <div className="summary-item-details">
                                    <p className="summary-item-name">{item.name}</p>
                                    <p className="summary-item-quantity">Cantidad: {item.quantity}</p>
                                </div>
                                <p className="summary-item-price">
                                    ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Envío</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Impuestos</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
