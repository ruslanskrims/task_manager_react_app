import React from "react";
import { useField, ErrorMessage } from "formik";
import styles from "./styles.module.scss";
import { TextError } from "../TextError";

export const Select = ({ label, children, ...props }) => {
  const [field, meta] = useField({
    ...props,
  });

  return (
    <div className={styles.form_control}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...props} {...field}>
        {children}
      </select>
      <ErrorMessage name={props.name} />
    </div>
  );
};
