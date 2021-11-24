import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { NoChat } from "../Components/NoChat/NoChat";
import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";

export const Router = () => {
  const [chats, setChats] = useState();

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.CHAT}>Chats</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.CHATS}>
          <Chats chatList={chats} setChatList={setChats} />
        </Route>
        <Route exact path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route exact path={ROUTES.NO_CHATS}>
          <NoChat chats={chats} />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>404</Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND}></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
