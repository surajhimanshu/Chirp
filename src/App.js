import {Routes,Route} from "react-router-dom";
import SearchBar from "./Components/Search/SearchBar";
import Profile from "./Components/Profile/Profile"
import Home from "./Components/NewsLetterModal/Home";

import { Link } from "react-router-dom";



import ForYou from "./Components/explore/ForYou";
import Covid from "./Components/explore/Covid";
import Trending from "./Components/explore/Trending";
import News from "./Components/explore/News";
import Sports from "./Components/explore/Sports";
import Entertainment from "./Components/explore/Entertainment";
import Explore from "./Components/explore/Explore";


const App = () => {
  return (
    <>
      <div>Initial App</div>
       <Home />
       <Routes>
        <Route path="/"  element ={<SearchBar />} />
        <Route path=":userName"  element ={<Profile />} />
        <Route path="explore"  element ={< Explore/>} >
          <Route index element={<ForYou />} />
          <Route path= "covid19" element = {<Covid />} />
          <Route path= "trending" element = {<Trending />} />
          <Route path= "news" element = {<News />} />
          <Route path= "sports" element = {<Sports />} />
          <Route path= "entertainment" element = {<Entertainment />} />
        </Route>
      </Routes>
      <Link to="/">Go to Home page</Link>
      <br />
      <Link to="explore">Go to explore page</Link>
    </>
  );
};

export default App;
