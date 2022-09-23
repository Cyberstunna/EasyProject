import React from "react";
import ChartView from "../components/ChartView";
import PerformanceBar from "../components/PerformanceBar";
import ToDo from "../components/ToDo";


const UserDashboard = () => {
    return(
        <div className="pl-28 flex flex-col h-full">
            <div className="relative mt-8 flex flex-col ">
                <h2 className="text-left font-bold text-2xl">Performance Bar</h2>
                <div className="">
                    <PerformanceBar />
                </div>
            </div>
            <div className="relative w-full flex flex-row mt-10">
                <div className="relative flex flex-col w-6/12">
                    <ChartView />
                </div>
                <div className="relative flex flex-col ml-8 w-3/5">
                    <ToDo />
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;