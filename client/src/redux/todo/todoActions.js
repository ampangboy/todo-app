import { ADD_NEW_TASK, SET_ALL_TASKS } from "./todoTypes";

const addNewTask = (task = "") => {
  return {
    type: ADD_NEW_TASK,
    payload: {
      task,
    },
  };
};

const setAllTasks = (tasks = []) => {
  return {
    type: SET_ALL_TASKS,
    payload: {
      tasks,
    },
  };
};

export default { addNewTask, setAllTasks };
