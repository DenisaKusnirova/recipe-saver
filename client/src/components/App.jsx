import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>app</Layout>
    </BrowserRouter>
  );
}

export default App;
