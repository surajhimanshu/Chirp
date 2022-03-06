import React from "react";
import { HiArrowLeft } from "react-icons/hi";
// import { useSelector } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import style from "./Account.module.css";
const Accountinfo = () => {
//   let { user } = useSelector((state) => state.user.user);
  return (
    <div div className={style.Accountinfo}>
      <div className={style.first}>
        <div className={style.heading}>
          <HiArrowLeft className={style.icon} />
          <h4>Account information</h4>
        </div>
      </div>
      {/*  cards */}
      <div className={style.card}>
        <div className={style.one}>
          <div className={style.name}>Username</div>
          <div className={style.value}>{"user.userName"}</div>
        </div>
        <div>
          <FaGreaterThan />
        </div>
      </div>

      <div className={style.card}>
        <div>
          <div className={style.name}>Phone</div>
          <div className={style.value}>{"user.Phone?user.Phone:''"}</div>
        </div>
        <div>
          <FaGreaterThan />
        </div>
      </div>

      <div className={style.card}>
        <div>
          <div className={style.name}>Email</div>
          <div className={style.value}>{"user.email"}</div>
        </div>
        <div>
          <FaGreaterThan />
        </div>
      </div>

      <hr />

      <div className={style.card}>
        <div>
          <div className={style.name}>Gender</div>
          <div className={style.value}>{"user.gender"}</div>
        </div>
        <div>
          <FaGreaterThan />
        </div>
      </div>
      <div className={style.card}>
        <div>
          <div className={style.name}>Birth date</div>
          <div className={style.value}>{"user.dob"}</div>
        </div>
        <div>
          <FaGreaterThan />
        </div>
      </div>
      <div className={style.card}>
        <div>
          <div className={style.name}>Age</div>
          <div className={style.value}>{"2022-user.year"}</div>
        </div>
        <div>
          <FaGreaterThan />
        </div>
      </div>
    </div>
  );
};

export default Accountinfo;
