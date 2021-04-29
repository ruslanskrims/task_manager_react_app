import React from "react";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Select } from "./Select";
import { RadioButtons } from "./RadioButtons";
import { CheckboxGroup } from "../../bus/tasks/assets/CheckboxGroup";

export const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
    default:
      return null;
  }
};
