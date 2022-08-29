import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import "./App.css"
import NavigationBar from "./components/NavigationBar";
import UserSettings from "./pages/UserSettings";
import PersonalInfo from "./viewcomponents/SettingsPersonalInfo";
import Account from "./viewcomponents/SettingsAccount";

function App() {
  return (
    <div className="App ">
      <div>
        <div className="sticky z-10">
          <NavigationBar />
        </div>
        <div className="pl-24">
        <Routes>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/settings" element={<UserSettings />}>
            <Route path="personalinfo" element={<PersonalInfo />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
