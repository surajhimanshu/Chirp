import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [postdata, setpostdata] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [bookmarkdata,setBookmarkData]=useState([]);
  const [tweets,setTweets]=useState([]);
  useEffect(()=>{
    getposts()
    getusers();
    getbookmark();
    getTweets();
    },[])

  let getposts = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let res1 = await res.json();
    setpostdata(res1);
    // console.log(res1);
  };
  let getusers = async () => {
    let res = await fetch("http://localhost:3000/users");
    let res1 = await res.json();
    setuserdata(res1);
    // console.log(res1);
  };
  let getbookmark = async () => {
    let res = await fetch("http://localhost:3000/bookmarks");
    let res1 = await res.json();
    setBookmarkData(res1);
    // console.log(res1);
  };
  let getTweets = async () => {
    let res = await fetch("http://localhost:3000/retweets");
    let res1 = await res.json();
    setTweets(res1);
    // console.log(res1);
  };

  return (
    <AuthContext.Provider value={{ userdata,getposts,postdata,setBookmarkData,bookmarkdata,getbookmark,tweets,getTweets}}>{children}</AuthContext.Provider>
  );
};
export { AuthContextProvider, AuthContext };
