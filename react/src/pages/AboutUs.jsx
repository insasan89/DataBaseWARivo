import { Link, useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="team">
      <h1>About us</h1>
      <div className="teamMembers">
        <div className="member1">
          <img src="" alt="Ines" />
          <h2>Ines</h2>
          <p>{/* Breve descripción sobre Ines */}</p>
        </div>
        <div className="member2">
          <img src="path/to/ornella.jpg" alt="Ornella" />
          <h2>Ornella</h2>
          <p>{/* Breve descripción sobre Ornella */}</p>
        </div>
        <div className="member3">
          <img src="path/to/vicente.jpg" alt="Vicente" />
          <h2>Vicente</h2>
          <p>{/* Breve descripción sobre Vicente */}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
