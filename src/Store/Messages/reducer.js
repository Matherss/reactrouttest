import faker from "faker";
import { ADD_MESSAGE_ACTION } from "./constants";

const initialState = {
  // messageList { chatId : [{id, author, message}], }
  messageList: {}
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId, ...rest } = action.payload;
      const chatMessages = state.messageList[chatId] ?? [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [...chatMessages, { id: faker.datatype.uuid(), ...rest }]
        }
      };
    }

    default:
      return state;
  }
};
