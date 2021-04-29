import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles.form_control}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className={styles.input} {...field} {...props} />
      </div>
    </>
  );
};
