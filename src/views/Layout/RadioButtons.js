import React from "react";
import styles from "./styles.module.scss";
import { TextError } from "./TextError";
import { Field, ErrorMessage } from "formik";

export const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
};
