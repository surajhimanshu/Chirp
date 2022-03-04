import React from "react";
import Styles from "./home.module.css";
import TweetBox from "./TweetBox";

const Home = () => {
  return (
    <div className={Styles.feed}>
      <div className={Styles.placeholder}></div>
      <div className={Styles.homeButton}>Home</div>
      <TweetBox visibility={false}/>
    </div>
  );
};

export default Home;
