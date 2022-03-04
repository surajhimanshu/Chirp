import React, {  useRef, useState } from "react";

import style from "./Signupform.module.css";

const Signupform = () => {
//   const [day, setday] = useState(31);
  const [days, setdays] = useState([]);
  const month = useRef();

  //   useEffect(() => {
  //     if (month.current.value === x) {
  //       setday((prev) => 29);
  //     } else if (
  //       month.current.value === "April" ||
  //       month.current.value === "June" ||
  //       month.current.value === "September" ||
  //       month.current.value === "November"
  //     ) {
  //       setday((prev) => 30);
  //     } else {
  //       setday((prev) => 31);
  //     }
  //     setdays((perv) => new Array(day));

  //     console.log(month.current.value);
  //     console.log(day);
  //     console.log(days);
  //   }, [month]);

  let x = "February";

  let Month = () => {
    let y = 0;
    if (month.current.value === x) {
      y = 29;
    } else if (
      month.current.value === "April" ||
      month.current.value === "June" ||
      month.current.value === "September" ||
      month.current.value === "November"
    ) {
      y = 30;
    } else {
      y = 31;
    }
    setdays(new Array(y).fill(1));
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.close}>X </div>
        <div className={style.bird}>
          <img
            src="https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg"
            alt=""
            className={style.bird}
          />
        </div>
      </div>
      <h2>Create your account</h2>
      <form action="">
        <div className={style.form}>
          <div className={style.first}>
            <div>Name</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className={style.second}>
            <div>Phone</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className={style.link}>Use email instead</div>
          <div className="DOB">
            <strong>Date of birth</strong>
            <p>
              This will not be shown publicly. Confirm your own age,even if this
              account is for a business, a pet, or something else.
            </p>
            <div className={style.date}>
              <div className={style.month}>
                <div> Month</div>

                <select name="month" id="" onChange={Month} ref={month}>
                  <option value=" ">&nbsp;&nbsp;&nbsp;&nbsp;</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div className={style.Day}>
                <div> Day</div>
                <div className={style.number}>
                  <select name="Number" id="">
                    
                      {days.map((el, i) => (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      ))}
                    
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signupform;
