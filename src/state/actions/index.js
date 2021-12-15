export const setAllUsers = (users) => {
  return {
    type: "SETUSERS",
    payload: users,
  };
};
