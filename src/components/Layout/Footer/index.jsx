import './index.scss';

// icons
import youtubeLogo from '../../../assets/icons/brand/youtube.jpg';
import facebookLogo from '../../../assets/icons/brand/facebook.jpg';
import instagramLogo from '../../../assets/icons/brand/instagram.jpg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerContainer container">
        <div className="footerAbout">
          <h2 className="brand">StayHealthy</h2>
          <div className="aboutus">
            Online Training, and Consultation About Diet and Exercise <br />{' '}
            tailored based on user needs.
          </div>
          <div className="socialSites">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtubeLogo} alt="youtube logo" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookLogo} alt="facebook logo" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramLogo} alt="instagram logo" />
            </a>
          </div>
        </div>
        <div className="footerProducts">
          <h2 className="title">Product</h2>
          <ul>
            <li>Gym Equipment</li>
            <li>Supplement</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footerExplore">
          <h2 className="title">Explore Us</h2>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="footerContact">
          <h2 className="title">Contact</h2>
          <ul>
            <li>hi@stayhealthy.com</li>
            <li>021-123-636</li>
            <li>stayhealthy.com</li>
          </ul>
        </div>
      </div>
      <div className="copyrigthSection">
        <p className="copyright">© 2021 StayHealty. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
