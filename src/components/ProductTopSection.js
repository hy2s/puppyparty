import React, { useState } from "react";
import ProductImageSlider from "./ProductImageSlider";
import { CiShare2 } from "react-icons/ci";

const ProductTopSection = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { name, description, price, image } = product; // ① props 분해
    const totalPrice = price * quantity;

    const handleQuantity = (type) =>
        setQuantity((q) => (type === "minus" ? Math.max(1, q - 1) : q + 1));

    return (
        <div className="product-top">
            <div className="image-box">
                {/* 👉 이미지 슬라이더에 product.image 전달하거나, 단일 이미지면 그대로 */}
                <ProductImageSlider
                    images={[`${process.env.PUBLIC_URL}${image}`]}
                />
            </div>

            <div className="info-box">
                <div className="title-best">
                    <h2 className="title">{name}</h2>
                    <p className="best">BEST</p>
                </div>

                <p className="desc">{description}</p>
                <div className="rating">
                    ★★★★★ <span>5.0</span>
                </div>

                <div className="price-icon">
                    <div className="price">{price.toLocaleString()}원</div>
                    <CiShare2 />
                </div>

                {/* 이하 수량·옵션·버튼 로직 동일 */}
            </div>
        </div>
    );
};

export default ProductTopSection;
