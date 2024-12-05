import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isExplorePage = location.pathname === "/explore";

  return (
    <div className={`footerWrapper ${isExplorePage ? "footerExplore" : ""}`}>
      <h2>WarScope</h2>
      <div className="footerText">
        <div className="footerOne">
          <p>
            Contains sensitive content that may not be suitable for minors and
            sensitive individuals. <br></br>
            By accessing this site,you confirm that you are of legal age and
            understand the nature of the content presented.
            <br></br>
            Viewer discretion is advised. &#169;
          </p>
        </div>

        <div className="footerTwo">
          <section className="footerLink">
            <Link to="/aboutus">
              <h3>About us</h3>
            </Link>
            <Link to="/aboutus">
              <h3>Contact us: warscope@hotspot.com</h3>
            </Link>
          </section>
        </div>

        <div className="footerThree">
          <p>Copyright &copy; 2024, All Right Reserved</p>
          <p>Privacy Policy</p>
          <p>Terms and conditions of use</p>
        </div>

        <div className="footerFour">
          <span> Follow us </span>
          <br></br>
          <a href="#">
            <img
              src="../gorjeo(1).png"
              alt="twitterIcon"
              className="twitterImage"
            />
          </a>
          <a href="#">
            <img
              src="../youtube(1).png"
              alt="youtubeIcon"
              className="youtubeImage"
            />
          </a>
          <a href="#">
            <img
              src="../el_linkedin.png"
              alt="linkedinIcon"
              className="linkedinImage"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
