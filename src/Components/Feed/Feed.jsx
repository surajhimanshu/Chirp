import React, { useContext } from 'react'
import Component from './Post';
import  { AuthContext } from "../../Contextprovider/Context"
const Feed = () => {
 const {userdata,get,postdata} = useContext(AuthContext);

   


  return (
    <div>
      
      {postdata.map(element=>{
        return   <Component element={element} get={get} userdata={userdata} key={element.id}/>
      })}
     
    </div>
  )
}

export default Feed
