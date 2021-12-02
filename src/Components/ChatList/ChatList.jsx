import { Link } from "react-router-dom";
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import "./ChatList.scss";
import DraftsIcon from "@mui/icons-material/Drafts";
import faker from "faker";
import DeleteIcon from "@mui/icons-material/Delete";

export const ChatList = ({ chats, chatId, addChat, deleteChat }) => {
  const [chat, setChat] = useState("");
  let handleChange = (event) => {
    setChat(event.target.value);
  };
  let onSubmit = (e) => {
    e.preventDefault();
    const addChatId = faker.datatype.uuid();
    addChat(chat, addChatId);
    setChat("");
  };
  const delChat = (id) => {
    deleteChat(id);
  };

  return (
    <List>
      Создай новый чат:
      <form onSubmit={onSubmit}>
        <TextField onChange={handleChange} value={chat} placeholder="название нового чата" />
      </form>
      Список чатов:
      {Object.keys(chats).map((id, i) => (
        <>
          <Link to={`/chats/${id}`} key={i} className="link">
            <ListItem disablePadding key={id}>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText>{chats[id].name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => delChat(id)}>
            delete chat
          </Button>
        </>
      ))}
    </List>
  );
};
