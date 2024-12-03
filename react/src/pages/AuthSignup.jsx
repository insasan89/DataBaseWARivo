import { Link } from "react-router-dom";
import "./Auth.css"; // Import the same CSS file for both login and signup pages

const AuthSignup = () => {
  return (
    <div className="container">
      <div className="box">
        <Link to="/">
          <h1 className="logo-title">WarScope</h1>
        </Link>
        <h2 className="heading">Signup</h2>
        <form>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Placeholder"
              className="form-input"
            />
          </div>

          {/* Confirm Email Input */}
          <div className="form-group">
            <label htmlFor="emailConfirm" className="form-label">
              Confirm Email
            </label>
            <input
              type="email"
              id="emailConfirm"
              placeholder="Placeholder"
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
              placeholder="Placeholder"
              className="form-input"
            />
            <span className="password-warning">
              Your password needs to have at least one number, one capital
              letter and one special character.
            </span>
          </div>

          {/* Repeat Password */}
          <div className="form-group">
            <label htmlFor="repeatPassword" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              id="repeatPassword"
              placeholder="Placeholder"
              className="form-input"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="form-remember">
            <input type="checkbox" id="terms" className="form-checkbox" />
            <label htmlFor="terms" className="form-checkbox-label">
              I accept the <a href="/policies">Policies</a> and the{" "}
              <a href="/conditions">Conditions</a>
            </label>
          </div>

          {/* Signup Button */}
          <button type="submit" className="AuthButton">
            Signup
          </button>
        </form>

        {/* Login Link */}
        <p className="prompt">
          Do you already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthSignup;
