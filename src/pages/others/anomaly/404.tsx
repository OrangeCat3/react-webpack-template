import React from "react";
import styles from "./404.less";
const svg404 = require("@assets/svg/404.svg")

const page404 = () => {


  return (
    <div>
      <img src={svg404} alt="" className={styles.img}/>
    </div>
  )
}

export default page404;
