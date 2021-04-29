import React from "react";
import { useField } from "formik";

export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({
    ...props,
    type: "checkbox",
  });

  return (
    <>
      <label htmlFor={props.id || props.name}>{children}</label>
      <input {...field} {...props} type="checkbox" />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
