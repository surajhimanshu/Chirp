import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Article = styled.div`
  height: 60px;
  box-sizing: border-box;
  padding: 0px 16px;
  outline: 1px solid red;
`;

const QuickFeedArticle = ({ data, type }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(data ? false : true);
  }, [data]);

  return (
    <Article>
      {isLoading ? (
        "...Loading"
      ) : type === "posts" ? (
        <div>Posts</div>
      ) : (
        <div>Users</div>
      )}
    </Article>
  );
};

export default QuickFeedArticle;
