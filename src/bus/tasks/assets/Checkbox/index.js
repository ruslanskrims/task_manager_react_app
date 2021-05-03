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
    <div className={classes}>
      <input {...props} className={styles.input} type="checkbox" />
      <label htmlFor={props.id} className={styles.label} onClick={onClick}>
        <span className={checkboxCn}></span>
        {label && <div className={styles.text}>{label}</div>}
      </label>
    </div>
  );
};
