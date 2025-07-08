import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  // const navigate = useNavigate();
  return (
    <header>
      <img 
        // onClick={()=>{navigate('/')}}
        src={`${process.env.PUBLIC_URL}/images/HeaderLogo.png`}
        alt="PuppyParty 상단 로고"
      />
      <div className="headerCategori">
        <p>파티용품</p>
        <p>케이크</p>
        <p>간식</p>
        <p>커플의류</p>
      </div>
      {/* <div onClick={()=>{navigate('/cart')}}> */}
      <div headerIcon>
        <BsCart2 />
        <CiSearch />
      </div>
    </header>
  );
};

export default Navigation;