import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Footer } from "../../common/Footer";
import { TasksMainComponent } from "../../bus/tasks";

export const Layout = () => {
  return (
    <>
      <section className={styles.layout}>
        <TasksMainComponent />
        <Footer />
      </section>
    </>
  );
};
