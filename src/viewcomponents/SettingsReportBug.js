import React from "react";

const ReportBug = () => {
    return(
        <div className="p-3 flex flex-col">
            <div className="flex flex-row w-full place-content-between flex-wrap">
                <h2 className="text-left font-bold">Report A Bug</h2>
            </div>
            <div className="flex flex-row w-full place-content-between pt-6 mb-3 flex-wrap ">
                <div className="flex flex-col text-left p-8">
                    <div className="mb-4 flex flex-row flex-wrap">
                        <span className="p-2">What section of the software are you experiencing this problem?</span>
                        <select id="section" name="section" className="bg-white p-2 border-solid border-2 default:ring-2">
                            <option value="dashboard">Dashboard</option>
                            <option value="projects">Projects</option>
                            <option value="clients">Clients</option>
                            <option value="resources">Resources</option>
                            <option value="scheduling">Scheduling</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <span className="mb-4">Feature Suggestion Details</span>
                        <input type="text" placeholder="Be as descriptive as possible to help our team of developers help you."
                        className="mt-2 border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3 w-full h-36" />
                    </div>
                    <div className="flex flex-col flex-wrap mb-4">
                        <span>In as little words as possible, state the problem this feature aims to solve</span>
                        <input type="text" placeholder="Aim for 10 words or less!" className="mt-2 border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3 w-1/2" />
                    </div>
                    <div className="flex flex-row mt-3">
                        <button className="ml-1 bg-indigo-500 hover:bg-indigo-300 ease-in-out duration-300 rounded-md p-3 text-sm text-white">Submit Suggestion</button>
                    </div>
                </div>
            </div>
            <footer className="text-xs font-light text-slate-400">
                <p>Easy Project Inc Developers take pride in making its products more efficient for its users which is why we communicate feature suggestion feedback on a regular basis. To find out more about the feature suggestion process, visit <span className="underline text-blue-500 hover:cursor-pointer">here.</span></p>
            </footer>
        </div>
    )
}

export default ReportBug;