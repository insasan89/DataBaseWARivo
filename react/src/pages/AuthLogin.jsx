import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/user";
import { login } from "../services/authService";
import "./Auth.css"; // Import the CSS file

const AuthLogin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const { setUser, user } = useContext(UserContext);

   const navigate = useNavigate();

   const handleLogin = async (e) => {
     try {
       e.preventDefault();
       const response = await login({ email: email, password: password });
       if (response) {
         localStorage.setItem("token", response.data.token);
         setUser(response.data.username);
         navigate("/HomeMap");
       } else {
         setError("Check your username or password");
       }
     } catch (error) {
       console.error(error.message);
     }
   };
  return (
    <div className="container">
      <div className="box">
        <Link to="/">
          <h1 className="logo-title">WarScope</h1>
        </Link>
        <h2 className="heading">Login</h2>
        <form>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              className="form-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgot-password" className="forgot-password-link">
              Did you forget your password?
            </Link>
          </div>

          {/* Remember Me */}
          <div className="form-remember">
            <input type="checkbox" id="remember" className="form-checkbox" />
            <label htmlFor="remember" className="form-checkbox-label">
              Remember your credentials
            </label>
          </div>

          {/* Login Button */}
          <button onClick={handleLogin} className="AuthButton">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="prompt">
          Don’t you have an account?{" "}
          <Link to="/signup" className="signup-link">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLogin;
