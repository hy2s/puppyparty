import React, { useState } from "react";

const ProductImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="slider-container">
            <button className="arrow left" onClick={prevSlide}>
                &lt;
            </button>
            <img src={images[index]} alt={`상품 이미지 ${index + 1}`} />
            <button className="arrow right" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default ProductImageSlider;
