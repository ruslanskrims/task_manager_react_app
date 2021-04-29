import React from "react";
import styles from "./styles.module.scss";
import { TextError } from "./TextError";
import { Field, ErrorMessage } from "formik";

export const Input = ({ label, name, ...rest }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
