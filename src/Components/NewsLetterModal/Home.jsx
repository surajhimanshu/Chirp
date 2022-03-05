import React, { useState } from "react";
import NewsLetterModal from "./NewsLetterModal";

const Home = () => {

  const [openNewsLetterModal, setopenNewsLetterModal] = useState(false);
  const handleCloseNewsLetterModal = () => {
    setopenNewsLetterModal(false);
  };

  return (
    <div style={{ backgroundColor: openNewsLetterModal ? "rgb(0,0,0,0.6)":"transparent"}}>

      {/* <h1>This is home page</h1> */}
        <div>
        <button style = {{opacity:"0.5",height:"80px",cursor:"pointer"}}onClick={() => { console.log("click"); setopenNewsLetterModal(true)}}>
           Open News Letter
        </button>
        </div>

      <NewsLetterModal
        openNewsLetterModal={openNewsLetterModal}
        handleCloseNewsLetterModal={handleCloseNewsLetterModal}
      />
          {/* <h1>this is home page</h1> */}
      {/* <button>hello</button> */}
    </div>
  
  );
};

export default Home;
