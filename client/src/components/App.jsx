import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../pages/Dashboard/Dashboard";
import { fetchUser } from "../actions/authActions";
import NewRecipe from "../pages/NewRecipe/NewRecipe";
import Layout from "./Layout";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage} exact />{" "}
      <Layout>
        <Route path="/home" component={Dashboard} exact />
        <Route path="/recipes/new" component={NewRecipe} exact />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
