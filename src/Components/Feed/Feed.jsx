import React, { useContext } from 'react'
import Component from './Post';
import  { AuthContext } from "../../Contextprovider/Context"
const Feed = () => {
 const {postdata} = useContext(AuthContext);

   


  return (
    <div>
      {postdata.map(element=>{
        return   <Component element={element} key={element.id}/>
      })}
     
    </div>
  )
}

export default Feed
