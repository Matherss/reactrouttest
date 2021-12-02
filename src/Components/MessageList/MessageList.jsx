import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { profileNameSelector, profileSelector } from "../../Store/Profile/selectors";
import "./MessageList.scss";

export const MessageList = (props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (props.messages.length > 3) {
      scrollRef.current.scrollIntoView();
    }
  }, [props.messages]);

  return (
    <div className="scroll">
      {props.messages.map((el) => (
        <div className="mes" key={el.id} ref={scrollRef}>
          <div className="left">
            <div className="author">{el.author}</div>
            <div className="time">{el.time}</div>
          </div>
          <div className="text">{el.text}</div>
        </div>
      ))}
    </div>
  );
};
