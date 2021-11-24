import React, { useRef } from "react";
import { useState } from "react";
import "./AddMessageForm.scss";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export const AddMessageForm = (props) => {
  const [message, setMessage] = useState("");

  const textInput = useRef(null);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.handleAddMessage(props.mainAuthor, message);

    setMessage("");
    textInput.current.focus();
  };

  return (
    <div className="fixed">
      <form action="submit" onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Text"
          variant="outlined"
          value={message}
          onChange={handleChange}
          margin="dense"
          autoFocus
          inputRef={textInput}
          required
        />
        <Button variant="contained" type="submit">
          click
        </Button>
      </form>
    </div>
  );
};
