import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.less";

function Loading() {
  const { t } = useTranslation();
  return (
    <div className={styles.context}>
      <div>
        <h1>{t("loading")}</h1>
      </div>
      <div>
        <Animation/>
      </div>
    </div>
  );
}

function Animation() {
  return <h1>...</h1>
}

export default Loading;
