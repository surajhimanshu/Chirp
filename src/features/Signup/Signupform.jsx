import React, { useRef, useState } from "react";

import style from "./Signupform.module.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Signupform = () => {
  //   const [day, setday] = useState(31);
  const [days, setdays] = useState([]);
  const month = useRef();

    const[email,setemail]=useState("Email")
    const[Phone,setphone]=useState("Phone")


  let year = new Array(122).fill(1);
   
  const [data,setdata]=useState({})
  
  
  let Submit=(e)=>{
     e.preventDefault()
  
      let obj ={
        name:e.target.name.value,
        phone:e.target.Phone.value,
        month:e.target.month.value,
        day:e.target.Day.value,
        year:e.target.year.value,
        username:e.target.username.value
      }
     setdata(obj)
   
     console.log(data)
  }

  

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

    let  ts =()=>{
     
      setphone(email)
      setemail(Phone)
      
    }
  return (
    <>
    <div className={style.container} >
      <div className={style.main}>

        <div className={style.close}  > ✖  </div>

        <div className={style.bird}>
          <img
            src="https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg"
            alt=""
            className={style.bird}
          />
        </div>
        <div></div>

      </div>
      <h2>Create your account</h2>

      <form action="" onSubmit={Submit}>


        <div className={style.form}>

        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { },
      }}
    >
      <TextField className={style.name}
        name="name"
        helperText=""
        id="demo-helper-text-aligned"
        label="Name"
      />
     
    </Box>
      
     
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': {mt:2 },
      }}
    >
      <TextField className={style.name}
        name="username"
        helperText=""
        id="demo-helper-text-aligned"
        label="UserName"
      />
     
    </Box>



    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { mt:2 },
      }}
    >
      < TextField className={style.name} 
        name={Phone}
        helperText=""
        id="demo-helper-text-aligned"
        label={Phone}
      />
     
    </Box>

          

          <div className={style.link} onClick={ts}> Use {email} instead</div>
          <div className="DOB">
            <strong>Date of birth</strong>
            <p className={style.p}>
              This will not be shown publicly. Confirm your own age,even if this
              account is for a business, a pet, or something else.
            </p>
            <div className={style.date}>

              <div className={style.month}>
                <div className={style.x}> Month</div>
                <div className={style.down}>
                <select name="month" className={style.down} onChange={Month} ref={month}>
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
              </div>


              <div className={style.Day}>
                <div className={style.x}> Day</div>
                <div className={style.number}>
                  <select name="Day" className={style.down}>
                    {days.map((el, i) => (
                      <option value={i + 1} key={i}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              
              <div className={style.year }>
                <div className={style.x}>Year</div>
                <div className={style.yr}>
                  <select name="year" className={style.down}>
                    {year.map((el, i) => (
                      <option value={1901 + i} key={i}>
                        {1901 + i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
             <button type="submit" className={style.button}>Next</button>

          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Signupform;







  
  