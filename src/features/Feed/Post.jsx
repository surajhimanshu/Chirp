import style from "./feed.module.css";
import { FaRegComment, FaRetweet,FaBookmark } from "react-icons/fa";
import {BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import React, { useContext } from 'react'

import  { AuthContext } from "../../Contextprovider/Context"
import { useSelector } from "react-redux";



const Post = ({ element}) => {
  const {getposts,getbookmark,bookmarkdata,tweets,getTweets} = useContext(AuthContext);

  // let { posts } = useSelector((state) => state.posts);

  const [isLoading, setIsLoading] = useState(true);
  // const[obj,setobj]= useState({})
  const [toggle,setToggle] =useState(true)




  useEffect(() => {
    setIsLoading(element ? false : true);
  }, [element, setIsLoading]);


  let post = async (obj,) => {
    try {
      let res = await fetch("http://localhost:3000/bookmarks", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      getbookmark()
      console.log(res1);
    } catch (error) {
      console.log("err", error);
    }
  };
  let posttweet = async (obj) => {
    try {
      let res = await fetch("http://localhost:3000/retweets", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      getTweets()
      console.log(res1);
    } catch (error) {
      console.log("err", error);
    }
  };

  let Delete =async(id)=>{
    try {
      let res = await fetch("http://localhost:3000/bookmarks/"+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      getbookmark()
      console.log(res1);
    } catch (error) {
      console.log("delete", error);
    }
  };

  let Deletetweet =async(id)=>{
    try {
      let res = await fetch("http://localhost:3000/retweets/"+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      getTweets()
      console.log(res1);
    } catch (error) {
      console.log("delete", error);
    }
  };






  let addcount = async (id,ele,count) => {
    // console.log(obj)
    setToggle(!toggle)
   let obj1={...ele,likes:ele.likes+count}
    try {
      let res = await fetch("http://localhost:3000/posts/"+id, {
        method: "PUT",
       body:JSON.stringify(obj1),
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      console.log("like",res1);
      getposts()
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
    
      {isLoading ? (
        "...Loading"
      ) : (
        <div className={style.main}>
          <div>
            <img src={element.avatar} alt="" className={style.img} />
          </div>

          <div className={style.details}>
            <div className="name">
              <strong> {element.name}</strong> &nbsp;{element.userName}
            </div>
            <div className={style.comment}>
              <h3>{element.tweet}</h3>
            </div>
            <div className={style.media}>
              {element.image === "" ? (
                ""
              ) : (
                <img src={element.image} alt="" className={style.post} />
              )}
              {element.video === "" ? (
                ""
              ) : (
                <video controls autoPlay muted width="500">

                  <source src={element.video} type="video/mp4"/>
                </video>
              )}
            </div>
            <div className={style.buttons}>
              <div>
                <div className={style.counts}>
                <FaRegComment /> {}
                </div>
              </div>
              <div>
              <div className={style.counts}   onClick= {()=>{ tweets.find((ele)=>ele.id===element.id)?Deletetweet(element.id):posttweet(element)}}   >

                <FaRetweet /> {element.retweets}
                </div>
              </div>
              <div onClick={()=>{toggle?addcount(element.id,element,1):addcount(element.id,element,-1)}}  >
              <div className={style.counts}>
                <BsFillHeartFill color={!toggle?"red":""} /> {element.likes}
                </div>
              </div>
              <div
                onClick={() => 
                 
                { bookmarkdata.find((ele)=>ele.id===element.id)?Delete(element.id):post(element)}
                  // addbookmark(element.id)
                }
              >
                <FaBookmark color={bookmarkdata.find((ele)=>ele.id===element.id)?"black":"grey"} />
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;



