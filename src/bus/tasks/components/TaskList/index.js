import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { Task } from "../Task";
import { useTaskFetch } from "../../hooks";
import * as dayjs from "dayjs";
import image from "../../../../images/illustration.png";
import cx from "classnames";
import {TransitionGroup, CSSTransition} from 'react-transition-group';


export const TaskList = ({ isOpenned }) => {
  const listCn = cx(styles.taskList, {
    [styles.normal]: isOpenned === true,
    [styles.full]: isOpenned === false,
  });
  const { isFetching, error } = useTaskFetch();
  const emptyTasksResponse = <img className={styles.empty} src={image} alt="Empty Tasks"></img>;
  const { dataArray } = useSelector((state) => state.taskList);
  const loader = isFetching && <p>Loading data from API...</p>;
  const errorMessage = error.status === 404 && <p>Not found!</p>;

  return (
    <div className={listCn}>
      {loader}
      {errorMessage}
      {isFetching || (dataArray.length && dataArray.length > 0) ? (
        dataArray.map((task) => {
          const {tag: {name}, id, completed, deadline, title} = task; 
          return (
            <Task
              key={id}
              deadline={dayjs(deadline).format("MMMM D, YYYY")}
              title={title}
              isChecked={completed}
              tag={name}
              id={id}
            />
          );
        })
      ) : (
        <>
          {emptyTasksResponse}
          <h1 className={styles.empty__title}>No2 tasks found!?</h1>
          <p className={styles.empty__description}>
            Try to assign more tasks to your employees or create a new project
            from scratch
          </p>
        </>
      )}
    </div>
  );
};
