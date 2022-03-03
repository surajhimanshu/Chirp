import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [postdata, setpostdata] = useState([]);
  const [userdata, setuserdata] = useState([]);
  useEffect(()=>{
    get()
    get1();
    },[])

  let get = async () => {
    let res = await fetch("http://localhost:3000/posts");
    let res1 = await res.json();
    setpostdata(res1);
    // console.log(res1);
  };
  let get1 = async () => {
    let res = await fetch("http://localhost:3000/users");
    let res1 = await res.json();
    setuserdata(res1);
    // console.log(res1);
  };
 

  return (
    <AuthContext.Provider value={{ userdata,get,postdata}}>{children}</AuthContext.Provider>
  );
};
export { AuthContextProvider, AuthContext };
