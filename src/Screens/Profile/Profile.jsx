import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import { changeUserNameAction, toggleUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

import "./Profile.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const { userName, showName } = useSelector(profileSelector);

  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction());
  };
  const handleNameChange = (e) => {
    dispatch(changeUserNameAction({ userName: e.target.value }));
  };

  return (
    <div className="App">
      <div className="absoluteHomeLink">
        <Button variant="contained" size="large">
          <Link to={ROUTES.HOME}>Home</Link>
        </Button>
      </div>
      <header className="App-header">
        <h2>Profile</h2>
        <TextField value={userName} onChange={handleNameChange}></TextField>

        <Checkbox checked={showName} value={userName} onChange={handleToggleShowName} />
        {showName && userName}
      </header>
    </div>
  );
};
