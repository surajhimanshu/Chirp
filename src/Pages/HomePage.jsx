import React from "react";
import Footer from "../features/Footer/Footer";
import Home from "../features/Home/Home";
import Menu from "../features/Menu/Menu";
import Styles from "../features/CSS/homepage.module.css";
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
