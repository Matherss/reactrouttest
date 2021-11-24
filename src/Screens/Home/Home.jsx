import React from "react";
import "./Home.css";
import { ChatList } from "../../Components/ChatList";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex_chat_elements">
          <ChatList />
        </div>
      </header>
    </div>
  );
};
