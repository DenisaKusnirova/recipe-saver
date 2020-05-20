import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1231&q=80")`,
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    right: 200,
    width: "36%",
    "& h2": {
      fontWeight: "bold",
    },
    "& > *:not(:last-child)": {
      marginBottom: 32,
    },
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h2">
          Store all your favourite recipes at one place
        </Typography>
        <Typography variant="h6">
          Save as many recipes as you want with Couscous app. Categorize them,
          plan your weekly meals and create shopping lists.
        </Typography>
        <Button size="medium" variant="contained" color="primary" href="http://localhost:5000/auth/google">
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
