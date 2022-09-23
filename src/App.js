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
import NewClients from "./pages/NewClients";

function App() { 
  return (
    <div className="App">
      <div>
        <div className="sticky z-10">
          <NavigationBar />
        </div>
        <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/new" element={<NewClients />} />
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


const Login = () => {
  return(
    <div className="relative top-40" >
      <div className="mx-auto w-3/12 h-96 border rounded-md shadow-xl ">
        <div className="flex flex-col h-full p-3">
          <div className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-indigo-500 font-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <form className="h-full place-content-between w-3/4 mx-auto">
            <h1 className="text-left text-2xl font-bold">Sign In</h1>
            <div className=" ">
              <div className="flex flex-col w-full my-3">
                <label className="text-left">Email</label>
                <input type='email' className="border-2 rounded-md h-10 p-5 text-lg border-indigo-500" required='true'/>
              </div>
              <div className="flex flex-col w-full my-3">
                <label className="text-left">Password</label>
                <input type='password' className="border-2 rounded-md h-10 p-5 text-2xl border-indigo-500" required='true'/>
              </div>
              <div className="flex flex-col my-8">
                <input type='submit' value="Sign In" className="cursor-pointer font-bold text-xl border px-2 py-1 rounded-none bg-indigo-400" required='true'/>
                <a href="" className="italic underline text-sm">Forgot Password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default App;
