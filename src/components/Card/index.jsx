import React from 'react';

//styles
import './index.scss';

// icons
import { ReactComponent as Next } from '../../assets/icons/arrow-move.svg';

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={props.image} alt="program" />
      </div>
      <h2 className="cardTitle">{props.name}</h2>
      <p className="author">By {props.author}</p>
      <p className="details">{props.details}</p>
      <p className="moreDetailsBtn">
        Check out this program! <Next />
      </p>
    </div>
  );
};

export default Card;
