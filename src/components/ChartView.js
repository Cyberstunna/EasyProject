import React from "react";


const ChartView = () => {

    return(
        <div className="flex flex-col content-around w-full shadow-2xl bg-white h-96 rounded-xl text-left">
            <div className="px-3 pt-1 w-full">
                <div className="text-xl font-bold text-indigo-500 ">
                    <h2>Service Trend</h2>
                </div>
                {/* <div className="w-full">
                    <Line data={chartData} />
                </div> */}
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}


export default ChartView;