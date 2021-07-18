import { ADD_NEW_TASK, SET_ALL_TASKS } from "./todoTypes";

const initialState = {
  tasks: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };

    case SET_ALL_TASKS:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.tasks),
      };

    default:
      return state;
  }
};

export default tasks;
