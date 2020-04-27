import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

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
    lightblue: "rgb(245,247,252)",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
