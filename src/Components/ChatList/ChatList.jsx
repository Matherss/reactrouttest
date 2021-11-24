import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import "./ChatList.scss";
import DraftsIcon from "@mui/icons-material/Drafts";

export const ChatList = ({ chats, chatId }) => {
  console.log(chats);
  // const [chatList, addChat] = useState(chats);
  // const [chat, newChat] = useState("");
  // let handleChange = (event) => {
  //   newChat(event.target.value);
  // };
  // let onSubmit = (e) => {
  //   e.preventDefault();
  //   addChat([...chatList, { name: chat, id: chatList.length + 1 }]);
  //   newChat("");
  // };
  return (
    <List>
      Создай новый чат:
      {/* <form onSubmit={onSubmit}>
        <TextField onChange={handleChange} value={chat} placeholder="название нового чата" />
      </form> */}
      Список чатов:
      {Object.keys(chats).map((id, i) => (
        <Link to={`/chats/${id}`}>
          <ListItem disablePadding key={i}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText key={i}>
                {chats[id].name} ID:{id}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
