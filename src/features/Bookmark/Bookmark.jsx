import React from 'react'
import { useSelector } from 'react-redux';
import style from "./Bookmark.module.css"
import { BsThreeDots } from "react-icons/bs";
import Post from '../Feed/Post';
const Bookmark = () => {
  const { user } = useSelector((state) => state.user.user);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  console.log(user)
  console.log(bookmarks)

  return (
    <div>
      <div className={style.navbar}>
         <div className={style.bookmark}>
           <h2>Bookmarks</h2>
           <p  className={style.p}>{"user.userName"}</p>
           </div>
           <div ><BsThreeDots/></div>
        </div>
     
    { bookmarks.map((element)=>{
      return <Post/>
    })}
      
    </div>
  )
}

export default Bookmark
