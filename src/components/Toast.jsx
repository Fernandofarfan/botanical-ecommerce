import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../redux/toastSlice';
import '../styles/Toast.css';

const Toast = () => {
    const dispatch = useDispatch();
    const toasts = useSelector((state) => state.toast.toasts);

    useEffect(() => {
        toasts.forEach((toast) => {
            const timer = setTimeout(() => {
                dispatch(removeToast(toast.id));
            }, toast.duration);

            return () => clearTimeout(timer);
        });
    }, [toasts, dispatch]);

    const getIcon = (type) => {
        switch (type) {
            case 'success': return '✓';
            case 'error': return '✕';
            case 'warning': return '⚠';
            case 'info': return 'ℹ';
            default: return 'ℹ';
        }
    };

    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <div key={toast.id} className={`toast toast-${toast.type}`}>
                    <span className="toast-icon">{getIcon(toast.type)}</span>
                    <span className="toast-message">{toast.message}</span>
                    <button
                        className="toast-close"
                        onClick={() => dispatch(removeToast(toast.id))}
                        aria-label="Cerrar notificación"
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Toast;
