import React from "react";
import styles from "./ProgressBar.module.css";
import * as colors from "../../../App/standard-colors";

const ProgressBar = ({ value, total }) => {
  return (
    <div className={styles.bar}>
      <div
        style={{
          "--width": `${(value / total) * 100}%`,
          "--backgroundColor": value !== total ? colors.pink : colors.green,
        }}
        className={styles.bar__progress}
      ></div>
      <div className={styles.bar__remainder}></div>
    </div>
  );
};

export default ProgressBar;
