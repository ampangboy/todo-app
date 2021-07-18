import SET_USER_INFO from "./userTypes";

const setUserInfo = (id = "", name = "") => {
  return {
    type: SET_USER_INFO,
    payload: {
      id,
      name,
    },
  };
};

export default { setUserInfo };
