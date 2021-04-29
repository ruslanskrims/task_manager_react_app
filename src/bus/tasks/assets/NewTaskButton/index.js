import React from "react";
import styles from "./styles.module.scss";

export const NewTaskButton = ({ onClick, buttonLabel }) => {
  return (
    <span className={styles.btn} onClick={onClick}>
      {buttonLabel}
    </span>
  );
};
