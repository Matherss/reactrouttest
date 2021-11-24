import React, { useCallback } from "react";
import "./Chats.css";
import { MessageList } from "../../Components/MessageList";
import { AddMessageForm } from "../../Components/AddMessageForm";
import { useState } from "react";
import { useEffect } from "react";
import faker from "faker";
import { ChatList } from "../../Components/ChatList";
import { Redirect, useParams } from "react-router";
import { ROUTES } from "../../Router/constants";

const initialChats = {
  id1: {
    name: "Chat1",
    messages: [
      { text: "FirstMessage", author: "BOT" },
      { text: "FirstMessage", author: "BOT" },
      { text: "FirstMessage", author: "BOT" }
    ]
  },
  id2: {
    name: "Chat2",
    messages: [{ text: "FirstMessageHereToo!", author: "AUTHORS.ME" }]
  }
};

export const Chats = (props) => {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);
  console.log("chats:" + chats);

  const mainAuthor = "ilya";
  const bot = "BOT";

  // const [messageList, setMessageList] = useState(initialChats.id1.messages);

  const changeMessageList = useCallback(
    (messageAuthor, messageText) => {
      setChats([
        ...chats.id1.messages,
        {
          author: messageAuthor,
          id: faker.datatype.uuid(),
          time: new Date().toLocaleTimeString(),
          text: messageText
        }
      ]);
    },
    [chats]
  );
  // useEffect(() => {
  //   let timerID;
  //   if (messageList.length && messageList[messageList.length - 1].author === mainAuthor) {
  //     timerID = setTimeout(() => {
  //       changeMessageList(bot, "bot text");
  //     }, 1500);
  //     return () => {
  //       clearTimeout(timerID);
  //     };
  //   }
  // }, [messageList, changeMessageList]);
  if (!chatId || !chats[chatId]) {
    return <Redirect to={ROUTES.NO_CHATS} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex_chat_elements">
          <ChatList chats={chats} chatId={chatId} />
          <div>
            <MessageList messages={chats[chatId].messages} />
            <AddMessageForm mainAuthor={mainAuthor} handleAddMessage={setChats} />
          </div>
        </div>
      </header>
    </div>
  );
};
