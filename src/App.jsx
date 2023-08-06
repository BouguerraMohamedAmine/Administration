import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/login/DashBoard";

import SideBar from "./component/SideBar";
import LoginPage from "./component/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;