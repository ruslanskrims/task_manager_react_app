import React from "react";
import { useField } from "formik";

export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({
    ...props,
    type: "checkbox",
  });

  return (
    <div className={styles.form_control}>
      <label htmlFor={props.id || props.name}>{children}</label>
      <input {...field} {...props} type="checkbox" />
    </div>
  );
};
