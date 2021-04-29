import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export const Checkbox = ({
  label,
  className,
  isChecked,
  onClick,
  ...props
}) => {
  const classes = cx(styles.checkbox, styles[className]);

  const checkboxCn = cx(styles.icon, {
    [styles.checkboxActive]: isChecked === true,
    [styles.checkboxNotActive]: isChecked === false,
  });

  return (
    <div className={classes} onClick={onClick}>
      <input {...props} className={styles.input} type="checkbox" />
      <label htmlFor={props.id} className={styles.label}>
        <span className={checkboxCn}></span>
        {label && <div className={styles.text}>{label}</div>}
      </label>
    </div>
  );
};
