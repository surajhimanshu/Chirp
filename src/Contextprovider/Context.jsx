import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  useEffect(()=>{
    get();
    },[])

  let get = async () => {
    let res = await fetch("http://localhost:3455/users");
    let res1 = await res.json();
    setdata(res1);
    console.log(res1);
  };
 

  return (
    <AuthContext.Provider value={{ data,get}}>{children}</AuthContext.Provider>
  );
};
export { AuthContextProvider, AuthContext };
