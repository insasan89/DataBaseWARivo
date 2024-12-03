import { Link } from "react-router-dom";
import "./Auth.css"; // Import the CSS file

const AuthLogin = () => {
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
              placeholder="youremail@mail.com"
              className="form-input"
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
              placeholder="password"
              className="form-input"
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
          <button type="submit" className="AuthButton">
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
