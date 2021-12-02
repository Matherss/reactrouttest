import React from "react";
import "./App.css";

import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";

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
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
