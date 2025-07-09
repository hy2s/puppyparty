import CardItem from "../asset/category.json";
import CardSet from "./CardSet";


const Categori = () => {
  return (
    <div className="categori">
      <h1>카테고리별 인기 상품</h1>
      <p>카테고리별로 판매량이 높은 TOP3 제품을 모았어요!</p>
      {/* card 호출 내용 :  */}
      {

      }
      <CardSet 
        setItem ={
        CardItem[0]
        }
      />
    </div>
  );
};

export default Categori;