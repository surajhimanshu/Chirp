import React from 'react'
import Styles from './menu.module.css'
const More = ({name, icon}) => {
  return (
    <>
      <div className={Styles.more}>
        <i>{icon}</i>
        &nbsp;
        &nbsp;
        {name}
      </div>
    </>
  )
}

export default More