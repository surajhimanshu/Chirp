import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookmarksAPI,
  getPostsAPI,
  getRetweetsAPI,
  getUsersAPI,
} from "../DataApi/data.api";
import Feed from "../Feed/Feed";
import Styles from "./home.module.css";
import TweetBox from "./TweetBox";

const Home = () => {
  const { avatar } = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsAPI());
    dispatch(getUsersAPI());
    dispatch(getBookmarksAPI());
    dispatch(getRetweetsAPI());
  }, [dispatch]);

  return (
    <div className={Styles.feed}>
      <div className={Styles.placeholder}></div>
      <div className={Styles.homeButton}>
        <img className={Styles.avatar} src={avatar} alt="" />
        &nbsp; &nbsp;
        <span className={Styles.homeText}>Home</span>
      </div>
      <TweetBox visibility={false} />
      <Feed />
    </div>
  );
};

export default Home;
