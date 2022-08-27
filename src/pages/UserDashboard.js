import React from "react";
import PerformanceBar from "../components/PerformanceBar";


const UserDashboard = () => {
    return(
        <div className="mx-14 w-full bg-slate-100 place-content-around">
            <div className="relative mt-8 flex flex-col place-content-center">
                <h2 className="text-left font-bold text-2xl">Performance Bar</h2>
                <div className="">
                    <PerformanceBar />
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;