import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import "./App.css"
import NavigationBar from "./components/NavigationBar";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <div className="App ">
      <div>
        <div className="sticky z-10">
          <NavigationBar />
        </div>
        <div className="pl-24">
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
