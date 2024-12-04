import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

   const isExplorePage = location.pathname === "/explore";

  return (
    <div className={`headerWrapper ${isExplorePage ? "headerExplore" : ""}`}>
      <Link to="/">
        <h2> WarScope </h2>
      </Link>
      <section className="nav">
        <Link to="/explore">
          <h3>Explore</h3>
        </Link>
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <Link to="/signup">
          <button className="primaryCTA">Signup</button>
        </Link>
      </section>
    </div>
  );
};

export default Header;
