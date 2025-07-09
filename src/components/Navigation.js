import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // const navigate = useNavigate();
  return (
    <header>
      <img 
        // onClick={()=>{navigate('/')}}
        src={`${process.env.PUBLIC_URL}/images/HeaderLogo.png`}
        alt="PuppyParty 상단 로고"
      />
      <div className="headerMenu">
        <p>파티용품</p>
        <p>케이크</p>
        <p>간식</p>
        <p>커플의류</p>
      </div>
      {/* <div onClick={()=>{navigate('/cart')}}> */}
      <div className="headerIcon">
        <LuShoppingCart />
        <FiSearch />
        <div className="menuIcon">
          <IoMenu />
        </div>
      </div>
    </header>
  );
};

export default Navigation;