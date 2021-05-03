import React from "react";
import DatePicker from "react-datepicker";
import * as dayjs from "dayjs";
import styles from "./styles.module.scss";
import "./datepicker.scss";
import { useField } from "formik";

export const CustomDatePicker = ({
  label,
  setFieldValue,
  placeholder,
  ...rest
}) => {
  const [field, meta] = useField({
    ...rest,
  });

  const handleChange = (value) => {
    setFieldValue("deadline", dayjs(value).endOf("day").format());
  };
  const selectedDay = dayjs(rest.value).endOf("day").toDate();
  const today = dayjs().endOf("day").toDate();
  const value = rest.value && selectedDay;

  return (
    <div className={styles.deadline}>
      <span className={styles.label}>Due to</span>
      <span className={styles.date}>
        <DatePicker
          value={value}
          minDate={today}
          selected={value || null}
          onChange={handleChange}
          dateFormat="MMMM d, yyyy"
          placeholderText={placeholder}
        />
      </span>
      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </div>
  );
};
