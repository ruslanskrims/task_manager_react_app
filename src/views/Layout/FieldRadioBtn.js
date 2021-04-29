import React from "react";
import styles from "./styles.module.scss";
import { useField } from "formik";

export const FieldRadioBtn = ({ children, ...props }) => {
  const [field] = useField({
    ...props,
  });

  return (
    <div className={styles.field_radio}>
      <div className={styles.con}>
        <input className={styles.input} {...field} {...props} type="radio" />
        <label htmlFor={props.id || props.name}>{children}</label>
      </div>
    </div>
  );
};
