import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import { ChatList } from "../ChatList";
import "../ChatList/ChatList.scss";
export const NoChat = ({ chats, setChats }) => {
  const addChat = (chatName, addChatId) => {
    setChats({ ...chats, [addChatId]: { name: chatName, messages: [] } });
  };
  const deleteChat = (delId) => {
    delete chats[delId];
    setChats({ ...chats });
  };

  return (
    <>
      <div className="App">
        <div className="absoluteHomeLink">
          <Button variant="contained" size="large">
            <Link to={ROUTES.HOME}>Home</Link>
          </Button>
        </div>
        <header className="App-header">
          <span>Please select a chat</span>
          <ChatList chats={chats} setChats={setChats} addChat={addChat} deleteChat={deleteChat} />
        </header>
      </div>
    </>
  );
};
