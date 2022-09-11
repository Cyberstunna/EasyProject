import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import "./App.css"
import NavigationBar from "./components/NavigationBar";
import UserSettings from "./pages/UserSettings";
import PersonalInfo from "./viewcomponents/SettingsPersonalInfo";
import Account from "./viewcomponents/SettingsAccount";
import SuggestFeature from "./viewcomponents/SettingsSuggestFeature";
import ReportBug from "./viewcomponents/SettingsReportBug";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProjects";
import Clients from "./pages/Clients";
import Resources from "./pages/Resources";
import Documents from "./pages/Documents";

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/settings" element={<UserSettings />}>
            <Route path="personalinfo" element={<PersonalInfo />} />
            <Route path="account" element={<Account />} />
            <Route path="suggest" element={<SuggestFeature />} />
            <Route path="reportbug" element={<ReportBug />} />
          </Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
