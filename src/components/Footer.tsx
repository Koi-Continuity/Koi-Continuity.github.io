import { instagram, linkedin, twitter, logo } from "../assets";
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerSectionPadding">
      <div className="footer-links">
        <div className="footer-links-logo">
          <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          <div className="logo-description">
            <p>Need to Simplify Your Program <br/> and Make it Better?</p>
            <Link to="mailto:info@koicontinuity.com "><button>Lets Chat</button> </Link>
          </div>
        </div>
        <div className="footer-links-nav">
          <h4>Navigation</h4>
          <Link to="/features"> <p>Features</p> </Link>
          <Link to="/whoweare"><p>Who We Are</p> </Link>
          <Link to="mailto:someone@example.com"><p>Lets Chat</p> </Link>
        </div>
        <div className="footer-links-careers">
          <h4>Careers</h4>
          <p>Do you bring a smile to </p>
          <p>everyones face? Do you </p>
          <p>go out of your way to help </p> 
          <p>others? If yes we want you!</p>
          <Link to='mailto:someone@example.com'><button>Join Koi</button> </Link>
        </div>
        <div className="footer-links-contact">
          <h4>Contact Us</h4>
          <p><a href="https://www.google.com/maps/search/200+-+100+park+royal+south">200 - 100 Park Royal South<br/>
          West Vancouver, BC Canada <br/>
          V7T 1A2 </a></p>
          <p>437-771-8861</p>
        </div>
        <div className="footer-social-media">
          <a href="https://ca.linkedin.com/company/koi-continuity-inc?trk=public_profile_topcard-current-company"><img src={linkedin} alt="LinkedIn" className="social-media-icon" /></a>
          <a href="https://twitter.com/koicontinuity"><img src={twitter} alt="Twitter" className="social-media-icon" /></a>
          <a href="https://www.instagram.com/koicontinuity/"><img src={instagram} alt="Instagram" className="social-media-icon" /></a>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-copyright">
        <p>&copy; 2024 Koi Continuity Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

