import React from "react";
import { Link } from "react-router-dom";

const NewProject = () => {
    return(
        <div className="mx-auto w-8/12 my-6">
            <div className="flex flex-row place-content-between my-6">
                <h1 className="text-xl font-bold text-left text-black">Add New Project</h1>
                <span className="text-xl font-bold text-left text-black">ProjectID #13</span>
            </div>
            <div className="flex flex-col bg-white shadow-xl w-full p-3 border rounded-md divide-y">
                <div className="py-2">
                    <h1 className="text-xl text-left font-bold pb-6">Project Details</h1>
                    <div className="py-2 px-36">
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Name</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Client</label>
                            <select>
                                <option value='Client A'>Client A</option>
                                <option value='Client B'>Client B</option>
                                <option value='Client C'>Client C</option>
                                <option value='Client D'>Client D</option>
                                <option value='Client E'>Client E</option>
                            </select>
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Problem to Solve</label>
                            <select>
                                <option value='Problem Type A'>Problem Type A</option>
                                <option value='Problem Type B'>Problem Type B</option>
                                <option value='Problem Type C'>Problem Type C</option>
                                <option value='Problem Type D'>Problem Type D</option>
                                <option value='Problem Type E'>Problem Type E</option>
                            </select>
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Service Category</label>
                            <select>
                                <option value='Service Type A'>Service Type A</option>
                                <option value='Service Type B'>Service Type B</option>
                                <option value='Service Type C'>Service Type C</option>
                                <option value='Service Type D'>Service Type D</option>
                                <option value='Service Type E'>Service Type E</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-left w-1/2 mb-5">
                            <label className="pr-3">Dev Solution</label>
                            <textarea rows='3' cols='20' className="p-1 border border-indigo-500 caret-inherit"></textarea>
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Start Date</label>
                            <input type="date" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Launch Date</label>
                            <input type="date" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Charge Type:</label>
                            <div>
                                <label className="pr-3">Hourly</label>
                                <input type="radio" name="charge" value="hourly" className="border border-indigo-500" />
                            </div>
                            <div className="pl-5">
                                <label className="pr-3">Lumpsum</label>
                                <input type="radio" name="charge" value="lumpsum" className="border border-indigo-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h1 className="text-xl text-left font-bold pb-6">Project Costs</h1>
                    <div className="py-2 px-36">
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Production Costs</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Running Costs</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Revenue</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Additional Costs</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row w-full place-content-between">       
                            <div className="flex flex-row mb-5">
                                <label className="pr-3">Total Revenue</label>
                                <span>$ 4700.95</span>
                            </div>
                            <div className="flex flex-row mb-5">
                                <label className="pr-3">Total Client Costs</label>
                                <span>$ 6015.95</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h1 className="text-xl text-left font-bold pb-6">Developer Notes</h1>
                    <div className="py-2 px-36">
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Estimated Hours</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Technologies To Be Used</label>
                            <input type="text" className="border border-indigo-500" />
                            <button className="ml-2 bg-indigo-500 font-bold px-2 text-white rounded-md">Add</button>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="pr-3 text-left">Implementation Plan</label>
                            <textarea rows='8' cols='20' className="p-1 border border-indigo-500 caret-inherit"></textarea>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h1 className="text-xl text-left font-bold pb-6">Client Notes</h1>
                    <div className="py-2 px-36">
                        <div className="flex flex-col mb-5">
                            <label className="pr-3 text-left">Problem Details</label>
                            <textarea rows='4' cols='20' className="p-1 border border-indigo-500 caret-inherit"></textarea>
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Milestones</label>
                            <input type="text" placeholder="Milestone Label" className="border border-indigo-500" />
                            <input type="text" placeholder="Milestone Description" className="mx-2 border border-indigo-500" />
                            <button className="ml-2 bg-indigo-500 font-bold px-2 text-white rounded-md">Add</button>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="pr-3 text-left">Extras</label>
                            <textarea rows='4' cols='20' className="p-1 border border-indigo-500 caret-inherit"></textarea>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="flex flex-row place-content-between">
                        <button className="ml-2 bg-indigo-500 font-bold px-2 py-1 text-white rounded-md">Register Project</button>
                        <Link to="/projects">
                            <button className="ml-2 bg-red-500 font-bold px-2 py-1 text-white rounded-md">Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewProject;