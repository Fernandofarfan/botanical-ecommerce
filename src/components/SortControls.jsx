import React from 'react';
import '../styles/SortControls.css';

const SortControls = ({ sortBy, onSortChange }) => {
    return (
        <div className="sort-controls">
            <label htmlFor="sort-select" className="sort-label">
                Ordenar por:
            </label>
            <select
                id="sort-select"
                className="sort-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="default">Predeterminado</option>
                <option value="name-asc">Nombre (A-Z)</option>
                <option value="name-desc">Nombre (Z-A)</option>
                <option value="price-asc">Precio (Menor a Mayor)</option>
                <option value="price-desc">Precio (Mayor a Menor)</option>
                <option value="rating">Mejor Calificación</option>
            </select>
        </div>
    );
};

export default SortControls;
