import React from "react";
import AppHeader from "./AppHeader";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "white",
      margin: 0,
      overflow: "scroll",
    },
  },
  container: {
    marginTop: 48,
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <AppHeader />
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
    </div>
  );
}

export default Layout;
