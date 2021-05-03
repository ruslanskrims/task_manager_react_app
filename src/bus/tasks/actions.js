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
    };
  },
  toggleForm: () => {
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
  createTask: (payload) => async (dispatch) => {
    dispatch({
      type: types.TASK_CREATE,
      payload,
    });
    const response = await api.todo.create(payload);
    if (response.status === 201) {
      dispatch(taskActions.fetchAsync());
    } else {
      dispatch(taskActions.setFetchingError(error));
    }
  },
  getTaskById: (id) => async (dispatch) => {
    try {
      const response = await api.todo.getTaskId(id);
      if (response.status === 200) {
        const result = await response.json();
        dispatch(taskActions.fillSelectedTask(result));
      }
    } catch (error) {
      dispatch(taskActions.setFetchingError(error));
    }
  },
  deleteTask: (id) => async (dispatch) => {
    dispatch({
      type: types.TASK_DELETE,
      id,
    });
    try {
      const response = await api.todo.delete(id);
      if (response.status === 204) {
        dispatch(taskActions.startNewTask([]));
        dispatch(taskActions.fetchAsync());
      }
    } catch (error) {
      dispatch(taskActions.setFetchingError(error));
    }
    dispatch(taskActions.stopFetching());
  },
  updateTask: (payload) => async (dispatch) => {
    try {
      dispatch({
        type: types.TASK_UPDATE,
        payload,
      });
      let chosenTagType;
      switch (payload.tag.name || payload.tag) {
        case `Sketch`: {
          chosenTagType = `8b535acc-623b-4ee3-9279-e6175159ff47`;
          break;
        }
        case `Spotify`: {
          chosenTagType = `e04358c2-4afc-4577-8ff6-9e8ddd4f406a`;
          break;
        }
        case `Dribble`: {
          chosenTagType = `dd63b60d-864b-400e-b03b-f5eb6d8ffa93`;
          break;
        }

        case `Behance`: {
          chosenTagType = `482a32f9-2b33-4d3f-af65-bb2f886d3ee9`;
          break;
        }

        case `UX`: {
          chosenTagType = `3a423b8a-d946-4c0b-8195-33f320bd5470`;
          break;
        }
        default: {
          throw new Error("There is no such type!");
        }
      }

      const response = await api.todo.update(payload.id, {
        title: payload.title,
        description: payload.description,
        completed: payload.completed,
        tag: chosenTagType,
        deadline: payload.deadline,
      });

      if (response.status === 200) {
        dispatch(taskActions.startNewTask([]));
        dispatch(taskActions.fetchAsync());
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(taskActions.stopFetching());
  },
});
