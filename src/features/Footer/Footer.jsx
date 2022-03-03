import React from "react";
import SearchBar from "../Search/SearchBar";
import Styles from "./footer.module.css";
import QuickFeed from "./QuickFeed";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContent}>
        <SearchBar />
        <QuickFeed heading={"What's happening"} />
        <QuickFeed heading={"Who to follow"} />
      </div>
    </div>
  );
};

export default Footer;
