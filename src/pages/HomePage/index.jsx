import React from 'react';

import './index.scss';

const HomePage = () => {
  return (
    <section id="home">
      <div className="overlay"></div>
      <div className="heroSection container">
        <h2 className="sub-heading">Welcome to the club</h2>
        <h1 className="heading">
          Choose Your Programs <br />
          Let’s Get Healthy
        </h1>
        <h3 className="sub-heading2">
          StayHealty provides Online Training, and Consultation About Diet and
          Exercise tailored based on user needs. We will <br /> provide a
          training model that can be accessed anytime and anywhere with the best
          trainers.
        </h3>
        <div className="heroBtns">
          <button className="joinNow">Join Now</button>
          <button className="contactUS">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
