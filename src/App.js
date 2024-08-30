import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartLoggingRoutine from "./pages/StartLoggingRoutine";
import LogRoutine from "./pages/LogRoutine";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartLoggingRoutine />} />
        <Route path="/log-routine" element={<LogRoutine />} />
      </Routes>
    </Router>
  );
};

export default App;
