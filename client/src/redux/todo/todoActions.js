import ADD_NEW_TASK from "./todoTypes";

const addNewTask = (task = "") => {
  return {
    type: ADD_NEW_TASK,
    payload: {
      task,
    },
  };
};

export default { addNewTask };
