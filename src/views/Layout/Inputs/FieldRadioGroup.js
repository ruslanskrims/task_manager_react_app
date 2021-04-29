import React from "react";
import styles from "./styles.module.scss";
import { useField } from "formik";

export const FieldRadioGroup = ({ children, ...props }) => {
  const { title } = props;

  return (
    <div className={styles.form_control}>
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
