import React from "react";
import styles from "./Layout/styles.module.scss";

export const TextError = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};
