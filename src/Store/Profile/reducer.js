import { CHANGE_USER_NAME_ACTION, TOGGLE_USER_NAME_ACTION, userNameAuthor } from "./constants";

const initialState = {
  showName: false,
  userName: userNameAuthor
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName
      };
    }
    case CHANGE_USER_NAME_ACTION: {
      return {
        ...state,
        userName: action.payload.userName
      };
    }

    default:
      return state;
  }
};
