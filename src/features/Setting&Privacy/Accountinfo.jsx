import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import style from "./Account.module.css";
import { useNavigate } from "react-router-dom";
const Accountinfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate()
  useEffect(() => {
    setIsLoading(user ? false : true);
    let date = user.dob.split("")
    setDateOfBirth(`${date[0]}${date[1]}/${date[2]}${date[3]}/${date[4]}${date[5]}${date[6]}${date[7]}`)
  }, [user]);
  return (
    <>
      {isLoading ? (
        "...Loading"
      ) : (
        <div className={style.Accountinfo}>
          <div className={style.first}>
            <div className={style.heading}>
              <HiArrowLeft className={style.icon} onClick={() => navigate("/settings")} />
              <h4>Account information</h4>
            </div>
          </div>
          {/*  cards */}
          <div className={style.card}>
            <div className={style.one}>
              <div className={style.name}>Username</div>
              <div className={style.value}>{user.userName}</div>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>

          <div className={style.card}>
            <div>
              <div className={style.name}>Phone</div>
              <div className={style.value}>
                {user.phoneNo}
              </div>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>

          <div className={style.card}>
            <div>
              <div className={style.name}>Email</div>
              <div className={style.value}>{user.email}</div>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>

          <hr />

          <div className={style.card}>
            <div>
              <div className={style.name}>Gender</div>
              <div className={style.value}>{user.gender}</div>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>
          <div className={style.card}>
            <div>
              <div className={style.name}>Birth date</div>
              <div className={style.value}>{dateOfBirth}</div>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>
          <div className={style.card}>
            <div>
              <div className={style.name}>Age</div>
              <div className={style.value}>
                {eval(
                  `2022-(${user.dob[4]}${user.dob[5]}${user.dob[6]}${user.dob[7]})`
                )}
              </div>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accountinfo;
