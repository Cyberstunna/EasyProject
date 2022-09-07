import React from "react";

const Projects = () => {

    const searchFilter = (event) => {
        console.log(event.target.value)
    }

    return(
        <div className="mt-4 mx-auto w-10/12">
            <div className="text-left text-2xl font-bold my-3">
                <h1>Projects</h1>
            </div>
            <div className="flex flex-row w-full place-content-between my-3">
                <div className="flex flex-row  mt-2 border-solid border-2 border-indigo-500 rounded-none text-gray-800 focus:ring-2 focus:ring-indigo-500 italic w-fit h-auto p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-500 pl-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type='text'
                    className="focus:outline-none pl-2"
                    onChange={searchFilter} 
                    />
                </div>
                {/* <div className="mt-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="pl-2 text-sm font-bold">Completed</label>
                </div> */}
                <div>
                    <button className="ml-1 bg-indigo-500 hover:bg-indigo-300 ease-in-out duration-300 rounded-md p-2 text-sm font-bold text-white mt-2">+ New Project</button>
                </div>
            </div>
            <div className="w-full my-3">
                <div className="bg-white border shadow-xl rounded-md">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="text-lg">
                                <th className="px-1 py-4">
                                    Project Name
                                </th>
                                <th className="px-1">
                                    Client
                                </th>
                                <th className="px-1">
                                    Category
                                </th>
                                <th className="px-1">
                                    TTD
                                </th>
                                <th className="px-1">
                                    Status
                                </th>
                                <th className="px-1">
                                    Start Date
                                </th>
                                <th className="px-1">
                                    End Date
                                </th>
                                <th className="px-1">
                                    Revenue
                                </th>
                                <th className="px-1">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="odd:bg-slate-300">
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Projects;