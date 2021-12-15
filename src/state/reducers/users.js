const userReducer = (state = [], action) => {
  switch (action.type) {
    case "SETUSERS":
      console.log("payload: ", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
