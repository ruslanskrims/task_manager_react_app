import React from "react";
import styles from "./styles.module.scss";
import { TextError } from "./TextError";
import { Field, ErrorMessage } from "formik";

export const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
