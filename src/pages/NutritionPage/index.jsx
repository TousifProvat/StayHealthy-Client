import './index.scss';

// images
import Discipline from '../../assets/images/discipline.jpg';
import HealthyFood from '../../assets/images/Bawah.jpg';

// icons
import Trophy from '../../assets/icons/trophy-icon.png';
import hours from '../../assets/icons/24-hours.png';

const NutritionPage = () => {
  return (
    <section id="nutrition" className="container">
      <div className="leftSide">
        <div className="discipline">
          <div className="badge">
            <img src={Trophy} alt="trophy icon" className="icon" />
            Discipline
          </div>
          <img src={Discipline} className="visual" alt="Man drinking water" />
        </div>
        <div className="healthyfood">
          <img
            src={HealthyFood}
            className="visual"
            alt="Woman preparing meal"
          />
          <div className="badge">
            <img src={hours} alt="hour icon" className="icon" />
            Eating Healthy
          </div>
        </div>
      </div>
      <div className="rightSide">
        <h3 className="sub-title">Nutritions</h3>
        <h2 className="title">
          Meal Preparation for <br /> workout
        </h2>
        <p className="details">
          Don’t worry we have the best nutritionist for your workout, <br />{' '}
          firstly consult with our experts, we can make your meal <br />{' '}
          preparation based on <b>Total Daily Energy Expenditure.</b>
        </p>
        <button className="joinNowBtn">Join Now</button>
      </div>
    </section>
  );
};

export default NutritionPage;
