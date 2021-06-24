import { userActionTypes } from "./User.actionsTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionTypes.REGISTER_USER_REQUEST:
      return {
        isLoading: true,
      };

    case userActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
