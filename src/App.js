import HomePage from "./Pages/HomePage";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Explore from "./Components/explore/Explore";
const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // if (!isAuth) {
    //   if (location.pathname !== "/signup") {
    //     navigate("/login");
    //   }
    // } else {
    //   if (location.pathname === "/home") {
    //     navigate("/home");
    //   }
    // }
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
            <Route path="/explore" element={<Explore />} />
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
