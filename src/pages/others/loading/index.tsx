import React from "react";
import { useTranslation } from "react-i18next";
import { Spin } from 'antd';
import styles from "./index.module.less";

function Loading() {
  const { t } = useTranslation();
  return (
    <div className={styles.context}>
      <div className={styles.spin}>
        <Spin size="large"/>
      </div>
      <div className={styles.char}>
        <h1>{t("loading")}</h1>
      </div>
      <div className={styles.point}>
        <h1> . . .</h1>
      </div> 
    </div>
  );
}



export default Loading;
