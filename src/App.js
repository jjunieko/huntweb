import React, { Component } from "react";
import Routes from "./router";

import "./styles.css";

import Header from "./components/Header";

const App = () => (
  <div clasName="App">
    <Header />
    <Routes />
  </div>
);

export default App;
