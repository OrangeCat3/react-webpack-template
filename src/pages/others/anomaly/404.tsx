import React from "react";
import styles from "./404.less";
import svg404 from "@assets/svg/404.svg";

const page404 = () => {


  return (
    <div>
      <img src={svg404} alt="" className={styles.img}/>
    </div>
  )
}

export default page404;
