import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import Toast from "./components/Toast";
import "./App.css";
import Wishlist from "./pages/Wishlist";

// Carga diferida (lazy loading) para mejorar el rendimiento
const ProductList = lazy(() => import("./components/ProductList"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const CartItems = lazy(() => import("./components/CartItems"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./components/Login"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));

function App() {
  return (
    <>
      <Navbar />
      <Toast />
      <ErrorBoundary>
        <Suspense fallback={<div className="loading">🔄 Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminRoute />}>
              <Route index element={<AdminDashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
