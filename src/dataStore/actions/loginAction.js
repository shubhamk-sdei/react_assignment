export const ADD_USERDATA = "ADD_USERDATA";
export const REMOVE_USERDATA = "REMOVE_USERDATA";

export const loadUser = (email, fullName) => {
  return {
    type: ADD_USERDATA,
    payload: {
      email,
      fullName,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USERDATA,
  };
};
