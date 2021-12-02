export const messageListSelector = (state) => state.messages.messageList;
export const chatMessagesSelector = (state, chatId) => state.messages.messageList[chatId];
export const chatAuthorSelector = (state, chatId, author) => state.messages.messageList[chatId].messages.author;
