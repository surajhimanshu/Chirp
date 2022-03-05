import React, { useEffect } from "react";
import Footer from "../features/Footer/Footer";
import Home from "../features/Home/Home";
import Menu from "../features/Menu/Menu";
import Styles from "../features/CSS/homepage.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ExplorePage from "./ExplorePage";
import ErrorPage from "./ErrorPage";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, location.pathname, navigate]);

  return (
    <div className={Styles.homepage}>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default HomePage;
