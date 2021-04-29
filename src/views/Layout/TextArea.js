import React from "react";
import styles from "./styles.module.scss";
import { TextError } from "./TextError";
import { Field, ErrorMessage } from "formik";

export const TextArea = ({ label, name, ...rest }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
