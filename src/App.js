import {Routes,Route} from "react-router-dom";
import SearchBar from "./Components/Search/SearchBar";
import Profile from "./Components/Profile/Profile"



const App = () => {
  return (
    <>
      <div>Initial App</div>
       {/* <Home /> */}
       <Routes>
        <Route path="/"  element ={<SearchBar />} />
        <Route path=":userName"  element ={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
