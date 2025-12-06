import React from "react";
import "../styles/SkeletonLoader.css";

const SkeletonLoader = ({ type = "card", count = 1 }) => {
    const renderCardSkeleton = () => (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
                <div className="skeleton-footer">
                    <div className="skeleton-price"></div>
                    <div className="skeleton-button"></div>
                </div>
            </div>
        </div>
    );

    const renderListSkeleton = () => (
        <div className="skeleton-list-item">
            <div className="skeleton-image-small"></div>
            <div className="skeleton-list-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
            </div>
        </div>
    );

    const renderTextSkeleton = () => (
        <div className="skeleton-text-block">
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
        </div>
    );

    const renderSkeleton = () => {
        switch (type) {
            case "card":
                return renderCardSkeleton();
            case "list":
                return renderListSkeleton();
            case "text":
                return renderTextSkeleton();
            default:
                return renderCardSkeleton();
        }
    };

    return (
        <div className="skeleton-container">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index}>{renderSkeleton()}</div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
