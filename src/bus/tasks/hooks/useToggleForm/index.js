import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../actions";

export const useToggleForm = () => {
  const { isFormOpenned } = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(taskActions.toggleForm());
    dispatch(taskActions.startNewTask([]));
  };

  return {
    isFormOpenned,
    toggle,
  };
};
