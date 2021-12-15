import actionTypes from "./users.acrtionTypes";
import initialStates from "./users.initialStates";

const usersReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.USERS_LOAD_START:
      console.log("in fetch start");
      return {
        ...state,
        isLoading: true,
        data: null,
        errorMessage: null,
      };
    case actionTypes.USERS_LOAD_SUCCESS:
      console.log("payload: ", payload);
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case actionTypes.USERS_LOAD_ERROR:
      console.log("payload: ", payload);
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
