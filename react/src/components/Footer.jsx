import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footerWrapper">
    <h3>This is the footer</h3>
    </div>
  );
};

export default Footer;
