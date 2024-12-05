import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/user";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const {user} = useContext(UserContext)

   const isExplorePage = location.pathname === "/explore";

   const logout = () => {
    localStorage.removeItem("token")
   }

  return (
    <div className={`headerWrapper ${isExplorePage ? "headerExplore" : ""}`}>
      <Link to="/">
        <h2> WarScope </h2>
      </Link>
      <section className="nav">
        <Link to="/explore">
          <h3>Explore</h3>
        </Link>
        {!localStorage.getItem("token") && (
          <>
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/signup">
              <button className="primaryCTA">Signup</button>
            </Link>
          </>
        )}

        {localStorage.getItem("token") && (
          <>
            <h3>{user}</h3>
            <Link to="/">
              <button onClick={logout}>logout</button>
            </Link>
          </>
        )}
      </section>
    </div>
  );
};

export default Header;
