import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import GetUsersScreen from "./screen/getUsers";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetUsersScreen />} />
        <Route exact path="/getusers" element={<GetUsersScreen />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
