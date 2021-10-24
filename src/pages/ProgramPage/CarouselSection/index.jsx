import Slider from 'react-slick';

//styles
import './index.scss';

//slider style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//components
import Card from '../../../components/Card';

// images
import fullbodyWorkout from '../../../assets/images/program-image/fullbody-workout.jpg';
import bodyweightWokrout from '../../../assets/images/program-image/bodyweight-workout.jpg';
import dumbellWorkout from '../../../assets/images/program-image/dumbell-workout.jpg';

//icon
import prevArrow from '../../../assets/icons/prev.svg';
import nextArrow from '../../../assets/icons/next.svg';

const CarouselSection = () => {
  const programs = [
    {
      name: 'Full Body Workout',
      author: 'The Rock',
      details:
        'You can do it on your own home, all in under 30 mins? just need a mat and som . . .',
      image: fullbodyWorkout,
    },
    {
      name: 'Bodyweight Workout',
      author: 'Timi Tarner',
      details:
        'No need equipments, just your body, your soul, and your spirit. You can do . . .',
      image: bodyweightWokrout,
    },
    {
      name: 'Dumbell Workout',
      author: 'Frank Jane',
      details:
        'This is a workout you can do at home just using a set of barbells. The workout is . . .',
      image: dumbellWorkout,
    },
    {
      name: 'Full Body Workout',
      author: 'The Rock',
      details:
        'You can do it on your own home, all in under 30 mins? just need a mat and som . . .',
      image: fullbodyWorkout,
    },
    {
      name: 'Bodyweight Workout',
      author: 'Timi Tarner',
      details:
        'No need equipments, just your body, your soul, and your spirit. You can do . . .',
      image: bodyweightWokrout,
    },
    {
      name: 'Dumbell Workout',
      author: 'Frank Jane',
      details:
        'This is a workout you can do at home just using a set of barbells. The workout is . . .',
      image: dumbellWorkout,
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <img src={nextArrow} alt="next-icon" />,
    prevArrow: <img src={prevArrow} alt="prev-icon" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {programs.map((program, index) => (
        <Card
          key={index}
          name={program.name}
          author={program.author}
          details={program.details}
          image={program.image}
        />
      ))}
    </Slider>
  );
};

export default CarouselSection;
