import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './index.scss';

// icon
import dumbell from '../../../assets/icons/dumbell.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrollPosition > 60 ? 'stickyHeader' : ''}>
      <div className="navbar container">
        <div className="logo">StayHealthy</div>
        <ul className={`navLinks ${active ? 'navLinksActive' : ''}`}>
          <Link spy activeClass="active" smooth to="home" offset={-150}>
            Home
          </Link>
          <Link spy activeClass="active" smooth to="program" offset={-150}>
            program
          </Link>
          <Link spy activeClass="active" smooth to="nutrition" offset={-150}>
            Nutritions
          </Link>
          <Link spy activeClass="active" smooth to="pricing">
            Pricing
          </Link>
          <Link spy activeClass="active" smooth to="about">
            About
          </Link>
          <div className="navbarBtns">
            <button>Join Now</button>
          </div>
        </ul>
        <div className="navbarBtns">
          <button>Join Now</button>
        </div>
        <div
          onClick={() => setActive((prev) => !prev)}
          className={`dumbellBtn ${active ? 'dumbellBtn-active' : ''}`}
        >
          <img src={dumbell} alt="dubmle" />
          <img src={dumbell} alt="dubmle" />
        </div>
      </div>
    </header>
  );
};

export default Header;
