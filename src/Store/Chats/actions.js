import { ADD_CHAT_ACTION } from "./constants";

export const addChatAction = ({ chatId, author, message }) => ({
  type: ADD_CHAT_ACTION,
  payload: { id: chatId, author, message }
});
