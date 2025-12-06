import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
  clearCart,
  selectCartItems,
  selectCartSubtotal
} from "../redux/cartSlice";
import { selectCoupon, calculateDiscount } from "../redux/couponSlice";
import { addToast } from "../redux/toastSlice";
import CouponInput from "./CouponInput";
import "../styles/CartItems.css";

const CartItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const coupon = useSelector(selectCoupon);

  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.1; // 10% tax
  const discount = calculateDiscount(subtotal, coupon);
  const total = subtotal + shipping + tax - discount;

  const handleRemoveItem = (item) => {
    dispatch(removeItemFromCart(item));
    dispatch(addToast({
      message: `${item.name} eliminado del carrito`,
      type: 'info',
      duration: 2000
    }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(addToast({
      message: 'Carrito vaciado',
      type: 'info',
      duration: 2000
    }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <div className="empty-cart-icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>¡Agrega algunas plantas hermosas a tu carrito!</p>
          <Link to="/products" className="btn btn-primary">
            Explorar Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>🛒 Mi Carrito</h1>
        <button
          className="clear-cart-btn"
          onClick={handleClearCart}
        >
          Vaciar Carrito
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items-list">
          {cartItems.map((item, index) => {
            const itemTotal = parseFloat(item.cost.replace('$', '')) * item.quantity;

            return (
              <div className="cart-item" key={`${item.name}-${index}`}>
                <div className="cart-item-image-container">
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-price">{item.cost} c/u</p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => dispatch(decrementQuantity(item))}
                    disabled={item.quantity <= 1}
                    aria-label="Decrementar cantidad"
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => dispatch(incrementQuantity(item))}
                    aria-label="Incrementar cantidad"
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  <p className="item-total-label">Subtotal</p>
                  <p className="item-total-price">${itemTotal.toFixed(2)}</p>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(item)}
                  aria-label="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Resumen del Pedido</h2>

          <div className="summary-row">
            <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'})</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Envío</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Impuestos (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="summary-row discount-row">
              <span>Descuento 🎉</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="summary-divider"></div>

          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <CouponInput />

          <button
            className="btn btn-primary checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceder al Pago
          </button>

          <Link to="/products" className="continue-shopping">
            ← Continuar Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
