import SET_USER_INFO from "./userTypes";

const initialState = {
  id: "",
  name: "",
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export default currentUser;
