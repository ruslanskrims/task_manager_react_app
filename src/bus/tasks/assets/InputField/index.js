import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField({
    ...props,
  });

  return (
    <>
      <div className={styles.custom_input}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error && (
          <span className={styles.error}>{meta.error}</span>
        )}
      </div>
    </>
  );
};
