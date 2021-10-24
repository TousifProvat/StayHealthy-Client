import './index.scss';

//icon
import Tick from '../../assets/icons/tick-icon.jpg';

const PricingCard = (props) => {
  return (
    <div className="packageCard">
      {props.popular ? <p className="bestTag">Popular</p> : ''}
      <h2 className="packageLevel">{props.level}</h2>
      <img src={props.img} alt={props.seo} className="packageVisual" />
      <div className="packageName">{props.name}</div>
      <ul className="packageFacilities">
        {props.packageContents.map((content, index) => (
          <li className="facility" key={index}>
            <img src={Tick} alt="tick" className="icon" />
            {content}
          </li>
        ))}
      </ul>
      <div className="packagePrice">
        {props.price}
        <span>/month</span>
      </div>
      <button className="packageBtn">Workout Now</button>
    </div>
  );
};

export default PricingCard;
