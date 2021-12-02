import React, { useState } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import { NoChat } from "../Components/NoChat";

const initialChats = {
  id1: {
    name: "Chat1",
    messages: [{ id: 1, text: "FirstMessage", author: "BOT" }]
  },
  id2: {
    name: "Chat2",
    messages: [{ id: 1, text: "FirstMessageHereToo!", author: "BOT" }]
  }
};

export const Router = () => {
  const [chats, setChats] = useState(initialChats);

  const mainAuthor = "ilya";
  const bot = "BOT";

  return (
    <>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route path={ROUTES.CHATS}>
          <Chats chats={chats} mainAuthor={mainAuthor} bot={bot} setChats={setChats} />
        </Route>
        <Route path={ROUTES.NO_CHATS}>
          <NoChat chats={chats} mainAuthor={mainAuthor} bot={bot} setChats={setChats} />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>404</Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND}></Redirect>
        </Route>
      </Switch>
    </>
  );
};
