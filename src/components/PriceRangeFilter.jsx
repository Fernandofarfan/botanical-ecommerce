import React, { useState } from "react";
import "../styles/PriceRangeFilter.css";

const PriceRangeFilter = ({ onPriceChange, minPrice = 0, maxPrice = 100 }) => {
    const [range, setRange] = useState({ min: minPrice, max: maxPrice });

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), range.max - 1);
        const newRange = { ...range, min: value };
        setRange(newRange);
        onPriceChange(newRange);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), range.min + 1);
        const newRange = { ...range, max: value };
        setRange(newRange);
        onPriceChange(newRange);
    };

    const handleMinInputChange = (e) => {
        const value = Number(e.target.value);
        if (value >= minPrice && value < range.max) {
            const newRange = { ...range, min: value };
            setRange(newRange);
            onPriceChange(newRange);
        }
    };

    const handleMaxInputChange = (e) => {
        const value = Number(e.target.value);
        if (value <= maxPrice && value > range.min) {
            const newRange = { ...range, max: value };
            setRange(newRange);
            onPriceChange(newRange);
        }
    };

    const minPercent = ((range.min - minPrice) / (maxPrice - minPrice)) * 100;
    const maxPercent = ((range.max - minPrice) / (maxPrice - minPrice)) * 100;

    return (
        <div className="price-range-filter">
            <label className="filter-label">Rango de Precio</label>

            <div className="price-inputs">
                <div className="price-input-group">
                    <span className="currency">$</span>
                    <input
                        type="number"
                        value={range.min}
                        onChange={handleMinInputChange}
                        min={minPrice}
                        max={range.max - 1}
                        className="price-input"
                    />
                </div>
                <span className="separator">-</span>
                <div className="price-input-group">
                    <span className="currency">$</span>
                    <input
                        type="number"
                        value={range.max}
                        onChange={handleMaxInputChange}
                        min={range.min + 1}
                        max={maxPrice}
                        className="price-input"
                    />
                </div>
            </div>

            <div className="slider-container">
                <div className="slider-track">
                    <div
                        className="slider-range"
                        style={{
                            left: `${minPercent}%`,
                            right: `${100 - maxPercent}%`
                        }}
                    ></div>
                </div>
                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={range.min}
                    onChange={handleMinChange}
                    className="slider slider-min"
                />
                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={range.max}
                    onChange={handleMaxChange}
                    className="slider slider-max"
                />
            </div>
        </div>
    );
};

export default PriceRangeFilter;
