import ADD_NEW_TASK from "./todoTypes";

const initialState = {
  tasks: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks].unshift(action.payload.task),
      };

    default:
      return state;
  }
};

export default tasks;
