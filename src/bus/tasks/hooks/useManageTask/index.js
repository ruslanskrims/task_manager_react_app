import {useCallback, useEffect} from 'react'
import { useDispatch } from "react-redux";

import { taskActions } from "../../actions";
import {useToggleForm} from '../useToggleForm'
export const useManageTask = () => {
  const dispatch = useDispatch();
  const {toggle, isFormOpenned} = useToggleForm();

  const saveTask = (task) => {
  let chosenTagType;
  switch (task.tag) {
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
  };
 dispatch(taskActions.createTask({
    title: task.title,
    completed: task.completed,
    deadline: task.deadline,
    description: task.description,
    tag: chosenTagType
 }));
}

const selectTask = useCallback((id) => {
  if(isFormOpenned) {
    dispatch(taskActions.getTaskById(id));
  } else {
    toggle();
    dispatch(taskActions.getTaskById(id));
  }
}, [!isFormOpenned]);

  return {
    saveTask,
    selectTask
  };
}
