import { ADD_USERDATA, REMOVE_USERDATA } from "../actions";

const initialState = {
  email: "",
  fullName: "",
  userName: "",
};

const updateUserData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERDATA:
      const newState = {
        email: action.payload.email,
        fullName: action.payload.fullName,
        userName: action.payload.fullName.trim().split(" ")[0],
      };
      return newState;
    case REMOVE_USERDATA:
      return initialState;
    default:
      return state;
  }
};

export default updateUserData;
