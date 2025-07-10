import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

const Card = ({ products }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();                   
  const { name, description, price, image } = products;
  const id = products["product-ID"];                 // "party-01"

  const getImageSrc = () =>
    `${process.env.PUBLIC_URL}${
      isHover ? image.replace("-1", "-2") : image
    }`;

  /** 클릭 시 상세로 이동 */
  const handleClick = () => {
    navigate(`/product/${id}`);                   
  };

  return (
    <div
      className="hoverCard"
      onClick={handleClick}                           
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="card">
        <img className="card-img" src={getImageSrc()} alt={name} />
        <p className="card-name">{name}</p>
        <p className="card-des">{description}</p>
        <p className="card-price">{price.toLocaleString()}￦</p>
        <div className="card-cart">
          <LuShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Card;