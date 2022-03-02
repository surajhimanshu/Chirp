import React, { useContext } from 'react'
import Component from './Post';
import  { AuthContext } from "../../Contextprovider/Context"
const Feed = () => {
 const {data,get} = useContext(AuthContext);
   console.log(data)
  return (
    <div>
      
      {data.map(element=>{
        return   <Component element={element} get={get} key={element.id}/>
      })}
     
    </div>
  )
}

export default Feed
