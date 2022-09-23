import React from "react";
import { Link } from "react-router-dom";


const NewClients = () => {
    return(
        <div className="mx-auto w-8/12 my-6">
            <div className="flex flex-row place-content-between my-6">
                <h1 className="text-xl font-bold text-left text-black">Add New Client</h1>
                <span className="text-xl font-bold text-left text-black">ClientID #2</span>
            </div>
            <div className="flex flex-col bg-white shadow-xl w-full p-3 border rounded-md divide-y">
                <div className="py-2">
                    <h1 className="text-xl text-left font-bold pb-6">Base Information</h1>
                    <div className="py-2 px-36">
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Name</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Corporate Phone Number</label>
                            <input type="tel" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Place of Business</label>
                            <input type="tel" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Industry</label>
                            <select>
                                <option value='Mining'>Mining</option>
                                <option value='Problem Type B'>Law Practice</option>
                                <option value='Problem Type C'>Political</option>
                                <option value='Problem Type D'>Civil Works</option>
                                <option value='Problem Type E'>Service</option>
                                <option value='Problem Type E'>Tech Startup</option>
                                <option value='Problem Type E'>Engineering</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h1 className="text-xl text-left font-bold pb-6">Contact Information</h1>
                    <div className="py-2 px-36">
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Representative Name</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Representative Number</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Representative Email</label>
                            <input type="text" className="border border-indigo-500" />
                        </div>
                        <div className="flex flex-row mb-5">
                            <label className="pr-3">Email List</label>
                            <input type="text" placeholder="Full Name" className="border border-indigo-500" />
                            <input type="email" placeholder="Contact Email" className="mx-2 border border-indigo-500" />
                            <button className="ml-2 bg-indigo-500 font-bold px-2 text-white rounded-md">Add</button>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="flex flex-row place-content-between">
                        <button className="ml-2 bg-indigo-500 font-bold px-2 py-1 text-white rounded-md">Register Client</button>
                        <Link to="/clients">
                            <button className="ml-2 bg-red-500 font-bold px-2 py-1 text-white rounded-md">Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewClients;