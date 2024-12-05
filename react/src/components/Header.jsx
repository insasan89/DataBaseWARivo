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
        {/* Si el usuario no está autenticado */}
        {!localStorage.getItem("token") ? (
          <>
            <Link to="/explore">
              <h3>Explore</h3>
            </Link>
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/signup">
              <button className="primaryCTA">Signup</button>
            </Link>
          </>
        ) : (
          // Si el usuario está autenticado
          <>
            <Link to="/homeMap">
              <h3>My Map</h3> {/* Ahora "My Map" es un enlace a /homeMap */}
            </Link>
            <h3>{user}</h3>
            <Link to="/">
              <button onClick={logout}>Logout</button>
            </Link>
          </>
        )}
      </section>
    </div>
  );
};

export default Header;
