import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Cherry from "../assets/images/cherry.png";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    flexGrow: 1,
    "& header": {
      padding: "24px 64px",
      [theme.breakpoints.down("sm")]: {
        padding: 24,
      },
      "& button": {
        borderRadius: 0,
      },
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "& > *": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > *:not(:last-child)": {
        marginRight: 48,
      },
    },
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontWeight: "bold",
    borderBottom: "2px solid transparent",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
    [theme.breakpoints.down("sm")]: {
      marginRight: 24,
    },
    "&:hover, &:focus": {
      borderBottom: `2px solid ${theme.colors.red}`,
      color: theme.palette.primary.main,
    },
  },
  activeLink: {
    borderBottom: `2px solid ${theme.colors.red}`,
    color: theme.palette.primary.main,
  },
}));

function AppHeader() {
  const classes = useStyles();

  const [currentPathName, setCurrentPathName] = React.useState(
    window.location.pathname
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Container maxWidth="xl" className={classes.container}>
          <div>
            <Icon fontSize="medium">
              <img src={Cherry} alt="cupcake_logo" />
            </Icon>
            <Link
              to="/"
              onClick={() => setCurrentPathName("/")}
              className={classnames(classes.link, {
                [classes.activeLink]: currentPathName === "/",
              })}
            >
              Home
            </Link>
            <Link
              to="/favourites"
              onClick={() => setCurrentPathName("/favourites")}
              className={classnames(classes.link, {
                [classes.activeLink]: currentPathName === "/favourites",
              })}
            >
              Categories
            </Link>
            <Link
              to="/shoppinglists"
              onClick={() => setCurrentPathName("/shoppinglists")}
              className={classnames(classes.link, {
                [classes.activeLink]: currentPathName === "/shoppinglists",
              })}
            >
              Shopping lists
            </Link>
          </div>
          <div>
            <Button size="small" color="primary">
              + Add a new recipe
            </Button>
            <Button size="small" variant="contained" color="primary">
              Login with Google
            </Button>
          </div>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppHeader;
