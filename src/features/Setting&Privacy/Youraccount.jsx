import React from "react";
import style from "./Setting.module.css";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { BsKey } from "react-icons/bs";
const Youraccount = () => {
  return (
    <div>
        <div>
      <div className={style.youraccount}>
        <div className={style.icon}>
          <HiArrowLeft />
        </div>
        <div>
          <h3>Your Account</h3>
        </div>
      </div>

      <div className={style.p}>
        <p>
          See information about your account, download an archive of your data,
          or learn about your account deactivation options
        </p>
      </div>
      </div>

       <div className={style.body}>
         
      <div className={style.part}>

        <div >
          <IoMdPerson className={style.icon} />
        </div>

        <div className={style.account}>
          <div className={style.mid}>
            <h5>Account information</h5>
          </div>

          <div className={style.p}>
            <p>
              See your account information like your phone number and email
              address.
            </p>
          </div>

        </div>
       <div> <FaGreaterThan /></div>

        
      </div>

      <div className={style.part}>
        <div className={style.icon}>
          <BsKey />
        </div>

        <div className={style.account}>
          <div className={style.mid}>
            <h5>Change your password </h5>
          </div>
          <div className={style.p}>
            <p>Change your password at any time.</p>
          </div>
        </div>
        <FaGreaterThan />
      </div>

      </div>

    </div>
  );
};

export default Youraccount;
