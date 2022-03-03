import style from "./feed.module.css";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { BsBookmarkPlus,BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";



const Post = ({ element, get, userdata }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const[obj,setobj]= useState({})
  const [toggle,setToggle] =useState(true)
   

  const temp = userdata.filter(
    ({ userName }) => userName === element.username
  )[0];

  useEffect(() => {
    setIsLoading(temp ? false : true);
    // console.log("bsdhshj", temp, isLoading);
  }, [temp, setIsLoading, isLoading]);

  let post = async (obj) => {
     console.log(obj)
     console.log(JSON.stringify(obj))
    try {
      let res = await fetch("http://localhost:3000/bookmarks", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      let res1 = await res.json();
      // console.log(res1);
    } catch (error) {
      console.log("err", error);
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
      // console.log("like",res1);
      get()
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
            <img src={temp.avatar} alt="" className={style.img} />
          </div>

          <div className={style.details}>
            <div className="name">
              <strong> {temp.name}</strong> &nbsp;{temp.userName}
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
              <div className={style.counts}>
                <FaRetweet /> {element.retweets}
                </div>
              </div>
              <div onClick={()=>{toggle?addcount(element.id,element,1):addcount(element.id,element,-1)}}  >
              <div className={style.counts}>
                <BsFillHeartFill color={!toggle?"red":""} /> {element.likes}
                </div>
              </div>
              <div
                onClick={() => {
                  post(element);
                }}
              >
                <BsBookmarkPlus />
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;



