import "./App.css";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
