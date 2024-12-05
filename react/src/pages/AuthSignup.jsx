import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/user";
import "./Auth.css"; // Import the same CSS file for both login and signup pages

const AuthSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChangeFormData = ({ target }) => {
    const { name, value } = target;
    setFormData((previousValue) => ({ ...previousValue, [name]: value }));
  };
  const validatePassword = () => {
    return formData.password === confirmPassword ? true : false;
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      if (validatePassword()) {
        const response = await signup(formData);
        if (response) {
          console.log(formData);
          response;
          localStorage.setItem("token", response.data.token);
          setUser(formData.username);
          navigate("/HomeMap");
        }
      } else {
        setError("The passwords do not match");
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
        <h2 className="heading">Signup</h2>
        <form onSubmit={handleSignup}>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="form-input"
              name="username"
              onChange={handleChangeFormData}
              required
            />
          </div>

          {/* Confirm Email Input */}
          <div className="form-group">
            <label htmlFor="emailConfirm" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="emailConfirm"
              placeholder="Your email"
              className="form-input"
              name="email"
              onChange={handleChangeFormData}
              required
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
              name="password"
              onChange={handleChangeFormData}
              required
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
              placeholder=""
              className="form-input"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
