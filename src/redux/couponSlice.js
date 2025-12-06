import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    couponCode: "",
    discount: 0,
    discountType: "", // "percentage" or "fixed"
    isValid: false
};

// Cupones válidos (en producción esto vendría de una API)
const validCoupons = {
    "BIENVENIDO10": { type: "percentage", value: 10 },
    "PLANTAS20": { type: "percentage", value: 20 },
    "DESCUENTO5": { type: "fixed", value: 5 },
    "VERANO15": { type: "percentage", value: 15 },
    "PRIMERACOMPRA": { type: "percentage", value: 25 }
};

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        applyCoupon: (state, action) => {
            const code = action.payload.toUpperCase();
            const coupon = validCoupons[code];

            if (coupon) {
                state.couponCode = code;
                state.discount = coupon.value;
                state.discountType = coupon.type;
                state.isValid = true;
            } else {
                state.isValid = false;
            }
        },
        removeCoupon: (state) => {
            state.couponCode = "";
            state.discount = 0;
            state.discountType = "";
            state.isValid = false;
        }
    }
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;

export const selectCoupon = (state) => state.coupon;

export const calculateDiscount = (subtotal, coupon) => {
    if (!coupon.isValid) return 0;

    if (coupon.discountType === "percentage") {
        return (subtotal * coupon.discount) / 100;
    } else if (coupon.discountType === "fixed") {
        return Math.min(coupon.discount, subtotal);
    }
    return 0;
};

export default couponSlice.reducer;
