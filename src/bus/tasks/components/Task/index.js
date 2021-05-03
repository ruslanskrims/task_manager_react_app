import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, Tag } from "../../assets";
import { FaCalendar } from "react-icons/fa";
import { useManageTask } from "../../hooks";
import cx from "classnames";
import { useSelector } from "react-redux";

export const Task = ({ title, deadline, isChecked, tag, id }) => {
  const { selectedTask } = useSelector((state) => state.taskList);
  const taskCx = cx(styles.task, {
    [styles.task]: !selectTask,
    [styles.task__active]: selectedTask.id === id,
  });
  const taskTagCx = cx("tags", tag);
  const { selectTask } = useManageTask();
  return (
    <li className={taskCx} onClick={() => selectTask(id)}>
      <Checkbox label={title} isChecked={isChecked} />
      <div className={styles.task__title}>
        <FaCalendar className={styles.task__calendar} />
        <p className={styles.deadline}>{deadline}</p>
        <Tag type={tag} tagCx={taskTagCx} />
      </div>
    </li>
  );
};
