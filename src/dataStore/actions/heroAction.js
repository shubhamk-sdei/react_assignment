export const ADD_HEROES = "ADD_HEROES";
export const REMOVE_HEROES = "REMOVE_HEROES";

export const loadUser = (name, alias, imageSrc, details) => {
  return {
    type: ADD_HEROES,
    payload: {
      name,
      alias,
      imageSrc,
      details,
    },
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_HEROES,
    payload: {
      id,
    },
  };
};
