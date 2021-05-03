import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { Task } from "../Task";
import { useTaskFetch } from "../../hooks";
import * as dayjs from "dayjs";
import image from "../../../../images/illustration.png";
import cx from "classnames";
import "./styles.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";

export const TaskList = ({ isOpenned }) => {
  const listCn = cx(styles.taskList, {
    [styles.normal]: isOpenned === true,
    [styles.full]: isOpenned === false,
  });
  const { isFetching, error } = useTaskFetch();
  const emptyTasksResponse = (
    <img className={styles.empty} src={image} alt="Empty Tasks"></img>
  );
  const loader = isFetching && (
    <Loader
      type="ThreeDots"
      color="#98d5f3"
      height={80}
      width={80}
      timeout={1000}
      className={styles.loader}
    />
  );

  const { dataArray } = useSelector((state) => state.taskList);
  const errorMessage = error.status === 404 && <p>Not found!</p>;

  return (
    <>
      <CSSTransition
        in={isOpenned === true}
        timeout={1000}
        classNames="tasklist"
      >
        <div className={listCn}>
          {loader}
          {errorMessage}
          <TransitionGroup>
            {dataArray.map((task, index) => {
              const {
                tag: { name },
                id,
                completed,
                deadline,
                title,
              } = task;
              return (
                <CSSTransition
                  key={"csst" + index}
                  timeout={100}
                  classNames={{
                    appear: "example-appear",
                    appearActive: "example-appear-active",

                    enter: "example-enter",
                    enterActive: "example-enter-active",
                    enterDone: "example-enter-done",

                    exit: "example-exit",
                    exitActive: "example-exit-active",
                    exitDone: "example-exit-done",
                  }}
                >
                  <Task
                    key={id}
                    deadline={dayjs(deadline).format("DD MMM YYYY")}
                    title={title}
                    isChecked={completed}
                    tag={name}
                    id={id}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
          {!dataArray.length && !isFetching && (
            <>
              {emptyTasksResponse}
              <h1 className={styles.empty__title}>No tasks found!?</h1>
              <p className={styles.empty__description}>
                Try to assign more tasks to your employees or create a new
                project from scratch
              </p>
            </>
          )}
        </div>
      </CSSTransition>
    </>
  );
};
