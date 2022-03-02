import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
