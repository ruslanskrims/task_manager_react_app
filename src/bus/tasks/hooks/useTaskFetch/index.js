import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../actions";

export const useTaskFetch = () => {
  const dispatch = useDispatch();
  const { dataArray, isFetching, error } = useSelector(
    (state) => state.taskList
  );

  useEffect(() => {
    dispatch(taskActions.fetchAsync());
  }, []);

  return {
    dataArray,
    isFetching,
    error,
  };
};
