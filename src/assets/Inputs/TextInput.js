import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={styles.field}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className={styles.input} {...field} {...props} />
        {meta.touched && meta.error && (
          <span className={styles.error}>{meta.error}</span>
        )}
      </div>
    </>
  );
};
