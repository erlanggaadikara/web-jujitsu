import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./Pages/Landing";
import { Router } from "@reach/router";
import Sejarah from "./Pages/AdditionalPage/Sejarah";

function App() {
  return (
    <div>
      <Router>
        <Landing path="/" />
        <Sejarah path="/Sejarah" />
      </Router>
    </div>
  );
}

export default App;
