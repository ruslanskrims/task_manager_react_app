import { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../actions";
import {isEmptyObject} from '../../../../helpers/isEmptyObject'

export const useToggleForm = () => {
  const { isFormOpenned, selectedTask } = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(taskActions.toggleForm())
    if(!isEmptyObject(selectedTask)) {
      dispatch(taskActions.startNewTask([]))
    }
  }

  const startNewTask = () => {
    toggle();
    dispatch(taskActions.startNewTask([]));
  }

  return {
    startNewTask,
    isFormOpenned,
    toggle,
  };
};
