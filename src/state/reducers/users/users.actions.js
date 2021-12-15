import actionTypes from "./users.acrtionTypes";
import UsersService from "../../../services/users.service";

export const usersLoadStart = () => ({
  type: actionTypes.USERS_LOAD_START,
});

export const usersLoadSuccess = (users) => ({
  type: actionTypes.USERS_LOAD_SUCCESS,
  payload: users,
});

export const usersLoadError = (errorMessage) => ({
  type: actionTypes.USERS_LOAD_ERROR,
  payload: errorMessage,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(usersLoadStart());

  UsersService.getAllUsers()
    .then((result) => dispatch(usersLoadSuccess(result.data)))
    .catch((error) => dispatch(usersLoadError(error.message)));
};
