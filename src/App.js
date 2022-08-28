import React from "react";
import UserDashboard from "./pages/UserDashboard";
import "./App.css"
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App ">
      <div>
        <div className="sticky z-10">
          <NavigationBar />
        </div>
        <div className="pl-24">
          <UserDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
