import React from "react";
import Styles from "../features/Home/home.module.css";

import Settings from "../features/Setting&Privacy/Setting";
import Youraccount from "../features/Setting&Privacy/Youraccount";

const SettingsPage = () => {
  return (
    <>
      <div className={Styles.feed}>
        <Settings />
        <Youraccount/>
      </div>
    </>
  );
};

export default SettingsPage;
