import './index.scss';

//about page components
import MenuCard from './MenuCard';

// icon
import PowerWatch from '../../assets/icons/power-watch.jpg';
import Dubmle from '../../assets/icons/dumble.jpg';
import ClipBoard from '../../assets/icons/clipboard.jpg';
import Network from '../../assets/icons/network.jpg';

const AboutPage = () => {
  return (
    <section id="about" className="container">
      <div className="headingContainer">
        <h3 className="subHeading">ABOUT US</h3>
        <h2 className="heading">
          Benefits of Joining <br /> With Us
        </h2>
      </div>
      <div className="testimonials">
        <div className="testimonialBox">
          <h3 className="count">5+</h3>
          <p className="label">Years of Journey</p>
        </div>
        <div className="testimonialBox middle">
          <h3 className="count">500+</h3>
          <p className="label">Happy Clients</p>
        </div>
        <div className="testimonialBox">
          <h3 className="count">400+</h3>
          <p className="label">Dedicated Members</p>
        </div>
      </div>
      <div className="menus">
        <MenuCard
          icon={PowerWatch}
          alt={'watch'}
          name={'Flexible Class'}
          details={`you can adapt the class to your busy life very easily
Workout everytime and everywhere.`}
        />
        <MenuCard
          icon={Dubmle}
          alt={'dubmle'}
          name={'Best Trainers'}
          details={`Our trainers is very profesional, very motivated and funny.`}
        />
        <MenuCard
          icon={ClipBoard}
          alt={'clipboard'}
          name={'Track progress'}
          details={`See your Progress and workout features for tracking your healthy.`}
        />
        <MenuCard
          icon={Network}
          alt={'network'}
          name={'Meet new friends'}
          details={`we have the big classes in the online workout, you can
          meet our new member for sharing and chill out.`}
        />
      </div>
    </section>
  );
};

export default AboutPage;
