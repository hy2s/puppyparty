import Card from "./Card";
import CardSection from "./CardSection";


const CardSet = ({setItem}) => {
  return (
    <div className="cardset">
      <CardSection 
        title={setItem.setTitle}
        des={setItem.setDescription}
        btn={setItem.setIcon}
      />
      {
        setItem.products.map((item,idx)=>{
          return (
            <Card
              key={idx}
              products={item}
            />
          )
        })
      }
    </div>
  );
};

export default CardSet;