import InteractiveBackground from "../components/InteractiveBackground";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="interactive"
        style={{
          height: "100%",
          width: "100%",
      
        }}
      >
        <InteractiveBackground />
        <div
          className="landingWrapper"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1>Know the data, stop the war.</h1>
          <p>
            Conflicts shape the world we live in, but{" "}
            <strong>knowledge is power</strong>. Explore a real-time map of
            global conflicts, uncover patterns, and gain insights that inspire
            solutions. Whether you're an activist, a journalist, or a global
            citizen, understanding the data is the first step toward making a
            difference.
          </p>
          <br />
          <Link to="/signup">
            <button className="primaryCTA">Make an Impact. Join us.</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
