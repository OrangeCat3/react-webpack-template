import React, { useEffect, useState } from "react";
import styles from "./404.module.less";
import svg404 from "@assets/svg/404.svg";

const Page404 = () => {

  const [ divHeight, setDivHeight ] = useState(500);
  useEffect(() => {
    setDivHeight(document.body.clientHeight)
  }, [divHeight])
  
  return (
    <div style={{'height': divHeight}}>
      <div className={styles.imgDiv}>
        <div>
          <img src={svg404} alt="" className={styles.img}/>
        </div>
      </div>
    </div>
  )
}

export default Page404;
