import './index.scss';

// img
import thumbnail from '../../assets/images/video-thumbnail.png';
import CarouselSection from './CarouselSection';

const ProgramPage = () => {
  return (
    <section id="program" className="container">
      <div className="videoSection">
        <img src={thumbnail} alt="video thumbnail" />
      </div>
      <div className="programSection">
        <h2 className="subHeading">Programs</h2>
        <h1 className="heading">
          We Have a programs to help <br /> your workouts
        </h1>
        <CarouselSection />
      </div>
    </section>
  );
};

export default ProgramPage;
