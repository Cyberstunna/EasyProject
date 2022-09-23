import React from "react";
import { Outlet } from "react-router-dom";
import SettingsNavigationBar from "../components/SettingsNavigationBar";
import PersonalInfo from "../viewcomponents/SettingsPersonalInfo";

const UserSettings = () => {
    return(
        <div className="pl-36">
            <div className="flex flex-row w-11/12 h-3/5 relative top-20 rounded-lg shadow-2xl divide-x">
                <div className="w-1/5 h-full">
                    <h2 className="text-left p-2 font-bold text-2xl">Settings</h2>
                    <SettingsNavigationBar />
                </div>
                <div className="w-4/5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserSettings;