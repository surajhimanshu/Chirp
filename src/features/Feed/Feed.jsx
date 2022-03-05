import React, { useContext } from 'react'
import Component from './Post';
import  { AuthContext } from "../../Contextprovider/Context"
import TweetBox from "./../Home/TweetBox"
const Feed = () => {
 const {postdata} = useContext(AuthContext);

   


  return (
    <div>
       <TweetBox />
      {postdata.map(element=>{
        return   <Component element={element} key={element.id}/>
      })}
     
    </div>
  )
}

export default Feed
