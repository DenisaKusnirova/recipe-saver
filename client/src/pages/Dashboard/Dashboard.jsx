import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../actions/recipeActions";

const useStyles = makeStyles((theme) => ({}));

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => dispatch(fetchRecipes()), []);

  return <p>DASHBOARD</p>;
}

export default Dashboard;
