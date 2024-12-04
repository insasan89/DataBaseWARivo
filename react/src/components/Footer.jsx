import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
    const location = useLocation();

    const isExplorePage = location.pathname === "/explore";

  return (
    <div className={`footerWrapper ${isExplorePage ? "footerExplore" : ""}`}>
      <h3>This is the footer</h3>
    </div>
  );
};

export default Footer;
