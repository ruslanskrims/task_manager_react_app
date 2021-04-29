import React from "react";
import styles from "./styles.module.scss";

export const TextError = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};
