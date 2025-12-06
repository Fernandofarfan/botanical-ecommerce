import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, removeCoupon, selectCoupon } from "../redux/couponSlice";
import { addToast } from "../redux/toastSlice";
import "../styles/CouponInput.css";

const CouponInput = () => {
    const dispatch = useDispatch();
    const coupon = useSelector(selectCoupon);
    const [inputValue, setInputValue] = useState("");

    const handleApply = () => {
        if (!inputValue.trim()) {
            dispatch(addToast({
                message: "Por favor ingresa un código de cupón",
                type: "error",
                duration: 2000
            }));
            return;
        }

        dispatch(applyCoupon(inputValue));

        // Check if valid after dispatch
        setTimeout(() => {
            const state = selectCoupon({ coupon });
            if (state.isValid) {
                dispatch(addToast({
                    message: `¡Cupón aplicado! ${state.discount}${state.discountType === 'percentage' ? '%' : '$'} de descuento`,
                    type: "success",
                    duration: 3000
                }));
                setInputValue("");
            } else {
                dispatch(addToast({
                    message: "Cupón inválido o expirado",
                    type: "error",
                    duration: 3000
                }));
            }
        }, 100);
    };

    const handleRemove = () => {
        dispatch(removeCoupon());
        dispatch(addToast({
            message: "Cupón removido",
            type: "info",
            duration: 2000
        }));
    };

    return (
        <div className="coupon-input-container">
            {!coupon.isValid ? (
                <div className="coupon-input-wrapper">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                        placeholder="Código de cupón"
                        className="coupon-input"
                        onKeyPress={(e) => e.key === 'Enter' && handleApply()}
                    />
                    <button
                        onClick={handleApply}
                        className="btn btn-outline apply-btn"
                    >
                        Aplicar
                    </button>
                </div>
            ) : (
                <div className="coupon-applied">
                    <div className="coupon-info">
                        <span className="coupon-icon">🎟️</span>
                        <div>
                            <p className="coupon-code">{coupon.couponCode}</p>
                            <p className="coupon-discount">
                                {coupon.discountType === 'percentage'
                                    ? `${coupon.discount}% de descuento`
                                    : `$${coupon.discount} de descuento`}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleRemove}
                        className="remove-coupon-btn"
                    >
                        ✕
                    </button>
                </div>
            )}

            <div className="available-coupons">
                <p className="coupons-hint">💡 Cupones disponibles: BIENVENIDO10, PLANTAS20, VERANO15</p>
            </div>
        </div>
    );
};

export default CouponInput;
