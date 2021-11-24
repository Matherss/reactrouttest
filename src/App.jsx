import React from "react";
import "./App.css";

import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { Router } from "./Router/Router";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7FFFD4"
    }
  }
});

const App = () => {
  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};
export default App;
