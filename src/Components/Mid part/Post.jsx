
import style from "./feed.module.css"
import { FaRegComment,FaRetweet,FaRegHeart } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
// import  from'react-icons/fa';
// import { FaCommentDots } from "react-icons/fa";

const Post = ({element,get}) => {


 
   let postdata= async (id,obj)=>{
     console.log(obj)
     obj={...obj, likes:1}
     let res = await fetch("http://localhost:3455/users/"+id,{
      method:"PATCH",
      body:JSON.stringify(obj),
      headers:{"Content-Type":"application/json"}
  })    
   let res1 = res.json()
   get()
   console.log("patch",res1)
     
   }
   let getdata= async (id)=>{
    let res = await fetch("http://localhost:3455/users/"+(+id),{
     method:"GET",
     headers:{"Content-Type":"application/json"}
 })    
  let res1 = res.json()
  let temp=res1
  console.log("data",temp)
  postdata(id,res1)
    
  }
 
  return (
    <>
    <div className={style.main}>
     
      <div>
      <img src={element.avatar} alt=""  className={style.img}/>
      </div>
        
        <div className={style.details}>
       <div className="name">
        <strong> {element.name}</strong> &nbsp;{element.userName}
       </div>
       <div className={style.comment}>
         i am sachin gupta. asndgdczyjuxvsxnm agshjxb aszcgasi  syudtsduydvcjst shgcuydschj nkjdsgucvx hjksdjhcsdcxjdsmcxdscxhjbbkjhvbcdhgxjhhdc khum
       </div>
       <div className={style.media}>
      <img src={element.avatar} alt="" className={style.post}/>

    </div>
      <div className={style.buttons}>
        <div >  <FaRegComment /> {}</div>
        <div >  <FaRetweet /> {element.retweets} </div>
        <div onClick={()=>getdata(element.id)}> <FaRegHeart /> {element.likes} </div>
        <div>  <BsBookmarkPlus /></div>
      
       
        
        
      </div>
       </div>
    </div>
    

    </>
  )
}

export default Post
