import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

export const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField({
    ...props,
  });

  return (
    <>
      <div className={styles.custom_input}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea {...field} {...props} rows="3" cols="50" />
        {meta.touched && meta.error && (
          <span className={styles.error}>{meta.error}</span>
        )}
      </div>
    </>
  );
};
