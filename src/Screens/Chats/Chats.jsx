import React from "react";
import "./Chats.css";
import { MessageList } from "../../Components/MessageList";
import { AddMessageForm } from "../../Components/AddMessageForm";

import { ChatList } from "../../Components/ChatList";
import { Redirect } from "react-router";
import { ROUTES } from "../../Router/constants";

import { useMemo } from "react";
import faker from "faker";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { profileNameSelector } from "../../Store/Profile/selectors";
import { chatListSelector } from "../../Store/Chats/selectors";
import { chatMessagesSelector, messageListSelector } from "../../Store/Messages/selectors";

export const Chats = ({ mainAuthor, bot, setChats }) => {
  const { chatId } = useParams();
  const chats = useSelector(chatListSelector);
  const messages = useSelector(messageListSelector);
  const messageAuthor = "me";

  const addChat = (chatName, addChatId) => {
    chats = { ...chats, [addChatId]: { name: chatName, messages: [] } };
    setChats({ ...chats });
  };
  const deleteChat = (delId) => {
    delete chats[delId];
    setChats({ ...chats });
  };
  const authorName = useSelector(profileNameSelector);
  const changeMessageList = (messageAuthor, messageText) => {
    setChats({
      ...chats,
      [chatId]: {
        ...chats[chatId],
        messages: [
          ...chats[chatId].messages,
          {
            author: messageAuthor,
            id: faker.datatype.uuid(),
            time: new Date().toLocaleTimeString(),
            text: messageText
          }
        ]
      }
    });
  };

  useMemo(() => {
    let timerID;
    if (
      chats[chatId]?.messages.length &&
      chats[chatId]?.messages[chats[chatId]?.messages.length - 1].author === authorName
    ) {
      timerID = setTimeout(() => {
        changeMessageList(bot, "bot text");
      }, 1500);
    }
    return () => {
      clearTimeout(timerID);
    };
  }, [chats[chatId]?.messages, changeMessageList]);
  if (!chatId || !chats[chatId]) {
    return <Redirect to={ROUTES.NO_CHATS} />;
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="absoluteHomeLink">
            <Button variant="contained" size="large">
              <Link to={ROUTES.HOME}>Home</Link>
            </Button>
          </div>
          <div className="flex_chat_elements">
            <ChatList addChat={addChat} deleteChat={deleteChat} chats={chats} chatId={chatId} />
            <div>
              <MessageList messages={messages} />
              <AddMessageForm mainAuthor={mainAuthor} handleAddMessage={changeMessageList} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
