import React from "react";


const PersonalInfo = () => {
    return(
        <div className="p-3 ">
            <div>
                <h2 className="text-left font-bold">Personal Information</h2>
            </div>
            <div className="flex flex-col text-left p-8">
                <div className="flex flex-row w-full place-content-between pt-6 flex-wrap">
                    <div className="flex flex-row place-content-between m-3">
                        <span className="pr-3 font-bold">Full Name</span>
                        <input type="text" value="John Doe" className="border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3" disabled/>
                    </div>
                    <div className="flex flex-row place-content-between m-3">
                        <span className="pr-3 font-bold">Affiliate Organization</span>
                        <input type="text" value="Keico Corp Inc." className="border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3" disabled/>
                    </div>
                </div>
                <div className="flex flex-row w-full place-content-between pt-6 flex-wrap">
                    <div className="flex flex-row place-content-between m-3">
                        <span className="pr-3 font-bold">Email Address</span>
                        <input type="email" value="john.doe@keico.com" className="border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3" disabled/>
                        <button className="bg-indigo-300 ml-1 hover:bg-indigo-500 ease-in-out duration-300 rounded-md px-1 text-sm text-white">Change</button>
                    </div>
                    <div className="flex flex-row place-content-between m-3">
                        <span className="pr-3 font-bold">Phone Number</span>
                        <input type="tel" value="" placeholder="123-456-7890" className="border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3" />
                        <button className="ml-1 bg-indigo-300 hover:bg-indigo-500 ease-in-out duration-300 rounded-md px-1 text-sm text-white">Change</button>
                    </div>
                </div>
                <div className="flex flex-row w-full place-content-between pt-6">
                    <div className="flex flex-row place-content-between m-3">
                        <span className="pr-3 font-bold">Current Password</span>
                        <input type="password" value="ilovecookies123" className="border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3" disabled/>
                        <button className="bg-indigo-300 ml-1 hover:bg-indigo-500 ease-in-out duration-300 rounded-md px-1 text-sm text-white">Change</button>
                    </div>
                </div>
                <div className="flex flex-row w-full place-content-between pt-6">
                    <div className="flex flex-row place-content-between m-3">
                        <span className="pr-3 font-bold">GeoDesignation</span>
                        <input type="text" value="Alberta, Canada" className="border-solid border-2 border-indigo-500 rounded-md text-stone-400 focus:ring-2 focus:ring-indigo-500 italic pl-3" disabled/>
                    </div>
                </div>
            </div>
            <footer className="text-xs font-light text-slate-400">
                <p>Easy Project Inc and its third party apps do not use your personal information to identify and track you outside the bounds of this app. To know more about your privacy rights, how we use your information and store it, visit <span className="underline text-blue-500 hover:cursor-pointer">here.</span></p>
            </footer>
        </div>
    )
}

export default PersonalInfo;