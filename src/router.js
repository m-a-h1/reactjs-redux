import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import UserListScreen from "./screen/userList.js";
import GetUsersScreen from "./screen/getUsers";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetUsersScreen />} />
        <Route exact path="/getusers" element={<GetUsersScreen />} />
        <Route exact path="/usersList" element={<UserListScreen />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
