import { types } from "./types";
import { api } from "../../api";

export const taskActions = Object.freeze({
  fill: (payload) => {
    return {
      type: types.TASK_FILL,
      payload,
    };
  },
  fillSelectedTask: (payload) => {
    return {
      type: types.TASK_SELECT,
      payload,
    };
  },
  startNewTask: (payload) => {
    return {
      type: types.TASK_CREATE_NEW,
      payload,
    }
  },
  toggleForm: (payload) => {
    return {
      type: types.TASK_TOGGLE_FORM,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.TASK_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  startFetching: () => {
    return {
      type: types.TASK_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.TASK_STOP_FETCHING,
    };
  },

  //Async
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.TASK_FETCH_ASYNC,
    });

    dispatch(taskActions.startFetching());

    try {
      const response = await api.todo.fetch();
      if (response.status === 200) {
        const result = await response.json();
        dispatch(taskActions.fill(result));
      }
    } catch (error) {
      dispatch(taskActions.setFetchingError(error));
    }

    dispatch(taskActions.stopFetching());
  },

  //Tasks

  createTask: (payload) => async (dispatch) => {
    dispatch({
      type: types.TASK_CREATE,
      payload,
    });
    const response = await api.todo.create(payload);
    console.log(response)
    if (response.status === 201) {
        dispatch(taskActions.fetchAsync());
    } else {
      const error = {
        status: response.status,
      };
      dispatch(taskActions.setFetchingError(error));
    }
  },
  getTaskById: (id) => async (dispatch) => {
    try {
    const response = await api.todo.getTaskId(id);
      if (response.status === 200) {
        const result = await response.json();
        console.log(result)
        dispatch(taskActions.fillSelectedTask(result));
      }
    } catch (error) {
      console.log(error.message)
    }
  }
});
