import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Dashboard";
import { fetchUser } from "../actions/authActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (user) {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/home" component={Dashboard} exact />
        </Layout>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage} exact />
    </BrowserRouter>
  );
}

export default App;
