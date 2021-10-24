import './index.scss';

const MenuCard = (props) => {
  return (
    <div className="menu">
      <img src={props.icon} className="menuIcon" alt={props.alt} />
      <div className="menuContent">
        <h2 className="menuName">{props.name}</h2>
        <div className="menuDetails">{props.details}</div>
      </div>
    </div>
  );
};

export default MenuCard;
