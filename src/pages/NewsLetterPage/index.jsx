import './index.scss';

// image
import group1 from '../../assets/images/Group-35.jpg';
import group2 from '../../assets/images/Group-38.jpg';
import group3 from '../../assets/images/Group-37.jpg';
import group4 from '../../assets/images/Group-36.jpg';

const NewsLetterPage = () => {
  return (
    <section id="newsletter" className="container">
      <div className="newsletterContent">
        <div className="formSection">
          <h2 className="heading">
            Become A Memeber of this <br />
            Workout class
          </h2>
          <form className="newsletterForm">
            <input
              placeholder="Email Address"
              type="email"
              className="emailField"
            />
            <button className="submitBtn" type="submit" disabled>
              Join Now
            </button>
          </form>
        </div>
        <div className="visuals">
          <div className="firstCol">
            <img src={group1} alt="trainees" className="col1" />
            <img src={group3} alt="yoga" />
          </div>
          <div className="secondCol">
            <img src={group2} alt="working out" className="col1" />
            <img src={group4} alt="chitchat" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterPage;
