import { Outlet } from "react-router-dom";
//import Footer from "../Components/Footer/Footer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
