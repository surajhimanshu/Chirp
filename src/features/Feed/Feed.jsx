import React, { useEffect, useState } from "react";
import Component from "./Post";
import TweetBox from "./../Home/TweetBox";
import { useSelector } from "react-redux";
const Feed = () => {
  const { posts } = useSelector((state) => state.posts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(posts ? false : true);
  }, [posts]);

  return (
    <>
      {isLoading ? (
        "...Loading"
      ) : (
        <div>
          {posts.map((element) => {
            return <Component element={element} key={element.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Feed;
