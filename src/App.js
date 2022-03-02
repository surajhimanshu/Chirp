import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
