import React from "react";
import { NavLink } from "react-router-dom";


const SettingsNavigationBar = () => {
    return(
        <div className=" flex flex-row bg-white w-full text-left p-4">
            <nav>
                <ul className="text-indigo-500 font-bold divide-solid divide-y">
                    <NavLink to="personalinfo">
                    <li className="p-2 hover:bg-slate-200 rounded-sm ease-in-out duration-300 cursor-pointer mb-2">
                            <div>
                                <span>Personal Information</span>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="account">
                    <li className="p-2 hover:bg-slate-200 rounded-sm ease-in-out duration-300 cursor-pointer mb-2">
                        <div>
                            <span>Account</span>
                        </div>
                    </li>
                    </NavLink>
                    <NavLink to="suggest">
                    <li className="p-2 hover:bg-slate-200 rounded-sm ease-in-out duration-300 cursor-pointer mb-2">
                        <div>
                            <span>Suggest a Feature</span>
                        </div>
                    </li>
                    </NavLink>
                    <NavLink to="reportbug">
                    <li className="p-2 hover:bg-slate-200 rounded-sm ease-in-out duration-300 cursor-pointer mb-2">
                        <div>
                            <span>Report A Bug</span>
                        </div>
                    </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default SettingsNavigationBar;