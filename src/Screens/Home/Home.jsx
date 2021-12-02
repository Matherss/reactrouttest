import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import "./Home.css";

export const Home = () => {
  const { userName } = useSelector(profileSelector);
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex_chat_elements">
          <div>
            <h1>User: {userName} </h1>
          </div>
          <ul>
            <li>
              <Button variant="contained" size="large">
                <Link to={ROUTES.HOME}>Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" size="large">
                <Link to={ROUTES.CHATS}>Chats</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" size="large">
                <Link to={ROUTES.PROFILE}>Profile</Link>
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
