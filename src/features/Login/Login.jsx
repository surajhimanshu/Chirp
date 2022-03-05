import React from "react";
import { useRef} from "react";

const Login = () => {
  const username = useRef();
  const password = useRef();

  const handleLogin = () => {
    console.log(username.current.value);
    console.log(password.current.value);
  };

  return (
    <>
      <h1>Login</h1>
      <h4>Enter Login info</h4>
      <input type="text" placeholder="Username" ref={username} />
      &nbsp;
      <input type="text" placeholder="password" ref={password} />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
