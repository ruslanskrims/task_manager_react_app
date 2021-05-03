import { types } from "./types";

const initialState = {
  selectedTask: [],
  dataArray: [],
  error: false,
  isLoading: false,
  isFetching: false,
  isFormOpenned: false,
};

export const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TASK_SELECT:
      return {
        ...state,
        selectedTask: state.isFormOpenned ? payload.data : [],
      };
    case types.TASK_UPDATE:
      return { ...state, selectedTask: payload };
    case types.TASK_CREATE_NEW:
      return { ...state, selectedTask: payload };
    case types.TASK_TOGGLE_FORM:
      return { ...state, isFormOpenned: !state.isFormOpenned };
    case types.TASK_START_FETCHING:
      return { ...state, isFetching: true };
    case types.TASK_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.TASK_SET_FETCHING_ERROR:
      return { ...state, error: payload };
    case types.TASK_FILL:
      return { ...state, dataArray: [...payload.data] };
    default:
      return state;
  }
};
