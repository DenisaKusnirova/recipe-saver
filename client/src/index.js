import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import reduxThunk from "redux-thunk";
import logger from "./middlewares/logger";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eb5655",
    },
    secondary: {
      main: "rgb(169,171,177)",
    },
  },
  colors: {
    red: "#eb5655",
    lightblue: "#f6f8fa",
  },
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
