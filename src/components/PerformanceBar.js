import React from "react";

const PerformanceBar = () => {
    return(
        <div className="flex flex-row  place-content content-around w-3/4 md:w-11/12 h-36 shadow-2xl rounded-xl border-solid border-black bg-white divide-x divide-slate-100">
            <div className="w-1/3 flex flex-col px-3 pt-1 text-left">
                <div>
                    <p className="text-xl font-bold text-indigo-500 text-left">Services</p>
                </div>
                <div className="flex flex-col pt-3">
                    <div className="flex flex-row w-full place-content-between items-center">
                        <div className="flex flex-row w-fit">
                            <p className="text-3xl font-black">83%</p>
                            <p className="text-sm text-slate-400 text-end">77.4%</p>
                        </div>
                        <div className="w-1/2 flex flex-row place-content-between">
                        <div className="flex flex-col w-fit">
                            <div className="flex flex-row font-extrabold w-fit px-1 text-sm rounded-xl bg-green-500 text-white">
                                <p>5.6%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">from last week</p>
                            </div>
                        </div>
                        <div className="w-fit text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full place-content-between items-center pt-1">
                        <div className="flex flex-row w-fit">
                            <p className="text-3xl font-black">11%</p>
                            <p className="text-sm text-slate-400 text-end">8.6%</p>
                        </div>
                        <div className="w-1/2 flex flex-row place-content-between">
                            <div className="flex flex-col w-fit">
                                <div className="flex flex-row font-extrabold w-fit px-1 text-sm rounded-xl bg-red-400 text-white">
                                    <p>2.4%</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-4-00">from last week</p>
                                </div>
                            </div>
                            <div className="w-fit text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex flex-col px-3 pt-1">
                <div>
                    <p className="text-xl font-bold text-indigo-500 text-left">Productivity</p>
                </div>
                <div></div>
            </div>
            <div className="w-1/3 flex flex-col px-3 pt-1 text-left">
                <div>
                    <p className="text-xl font-bold text-indigo-500 text-left">Upcoming</p>
                </div>
                <div className="">
                    <ul className="list-inside text-lg font-bold text-green-500">
                        <li className="marker:w-fit h-fit w-full m-0">
                            <div className="flex flex-row m-0 align-center">
                                <div className="pt-1 pr-2 md:pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-black text-xs">Client meeting for Project A</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-xs pl-2">in 5 days</span>
                                </div>
                            </div>
                        </li>
                        <li className="marker:w-fit h-fit w-full m-0">
                            <div className="flex flex-row m-0 align-center">
                                <div className="pt-1 pr-2 md:pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-black text-xs">Quality Assurance for Project B</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-xs pl-2">in 9 days</span>
                                </div>
                            </div>
                        </li>
                        <li className="marker:w-fit h-fit w-full m-0">
                            <div className="flex flex-row m-0 align-center">
                                <div className="pt-1 pr-2 md:pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-black text-xs">Milestone for Project C</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-xs pl-2">in 14 days</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PerformanceBar;