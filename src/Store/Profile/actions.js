import { CHANGE_USER_NAME_ACTION, TOGGLE_USER_NAME_ACTION } from "./constants";

export const toggleUserNameAction = () => ({
  type: TOGGLE_USER_NAME_ACTION
});
export const changeUserNameAction = (payload) => ({
  type: CHANGE_USER_NAME_ACTION,
  payload
});
