import HomePage from "./Pages/HomePage";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
// import { useSelector } from "react-redux";
import { useEffect } from "react";


const App = () => {
  // const isAuth = useSelector((state) => state.auth.isAuth);

  const isAuth = false;

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!isAuth) {
      navigate(location.pathname === "/signup" ? "/signup" : "/login");
    }
  }, [isAuth, location.pathname, navigate]);

  return (
    <>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/*" element={<HomePage />} />
            {/** Private Routes */}
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/*" element={<LoginPage />} />
            {/* Open Routes */}
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
