import React from "react";
import { TaskList, TaskForm } from "./components";
import { NewTaskButton } from "./assets/NewTaskButton";
import styles from "./styles.module.scss";
import { useToggleForm, useManageTask } from "./hooks";

export const TasksMainComponent = () => {
  const { toggle, isFormOpenned } = useToggleForm();
  const { startNewTask } = useManageTask();
  return (
    <>
      <div className={`${styles.container} ${styles.wrap}`}>
        <NewTaskButton
          onClick={!isFormOpenned ? startNewTask : toggle}
          buttonLabel={isFormOpenned ? "Close" : "Create New Task"}
        />
        <div className={styles.row}>
          <TaskList isOpenned={isFormOpenned} />
          <TaskForm isOpenned={isFormOpenned} />
        </div>
      </div>
    </>
  );
};
