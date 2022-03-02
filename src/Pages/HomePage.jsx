import React from "react";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Styles from "../Components/CSS/homepage.module.css";
import { Route, Routes } from "react-router-dom";
import ExplorePage from "./ExplorePage";

const HomePage = () => {
  return (
    <div className={Styles.homepage}>
      <Menu />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<ExplorePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default HomePage;
