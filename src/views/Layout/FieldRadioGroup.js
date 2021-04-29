import React from "react";
import styles from "./styles.module.scss";

export const FieldRadioGroup = ({ children, ...props }) => {
  const { title } = props;

  return (
    <div className={styles.radio__group}>
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
