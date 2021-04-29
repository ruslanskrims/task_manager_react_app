import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

export const Select1 = ({ label, children, ...props }) => {
  const [field, meta] = useField({
    ...props,
  });

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...props} {...field}>
        {children}
      </select>
      {meta.touched && meta.error && (
        <span className={styles.select}>{meta.error}</span>
      )}
    </>
  );
};
