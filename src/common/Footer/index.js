import React from "react";
import styles from "./styles.module.scss";
import * as dayjs from "dayjs";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        &copy;{dayjs().year()} Ruslans Krims - All Rights Reserved
      </div>
    </div>
  );
};
