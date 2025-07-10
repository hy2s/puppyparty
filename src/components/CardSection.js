import { BiParty } from "react-icons/bi";

const CardSection = ({title,des,btn}) => {
  return (
    <div className="cardsection">
      <p className="card-btn">{btn}</p>
      <p className="card-title">{title}</p>
      <p className="card-des">{des}</p>
      <div className="card-icon">
        <BiParty />
      </div>
    </div>
  );
};

export default CardSection;