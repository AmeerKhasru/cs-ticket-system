import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

// FIX 1: Added taskStatusList to the destructured props
const Tickets = ({ ticketsPromise, handleAddToTaskStatus, taskStatusList }) => {
    
    const tickets = use(ticketsPromise);
    return (
        /* Added px-6 for better mobile spacing */
        <div className="max-w-[1200px] mx-auto bg-base-200 rounded-2xl mt-2 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-0 py-10 ">
              
            {/* LEFT SIDE: Tickets */}
            <div className="lg:col-span-2 lg:px-4">
                <h2 className="text-2xl font-bold text-slate-800 mr-4 mb-2">Customer Tickets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {tickets.map(ticket => (
                        <Ticket 
                            key={ticket.id} 
                            ticket={ticket}
                            {...ticket} 
                            handleAddToTaskStatus={handleAddToTaskStatus} 
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: Status Panels */}
            <div className="space-y-6 lg:mt-14">
                
                {/* Task Status Panel */}
                <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-700 flex items-center gap-2 mb-4">
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                        {/* FIX 2: Check if taskStatusList exists before reading length */}
                        Task Status ({taskStatusList?.length || 0})
                    </h1>

                    {/* Logic: Handle empty state vs list state */}
                    {!taskStatusList || taskStatusList.length === 0 ? (
                        <p className="text-sm text-slate-400 p-3 bg-slate-50 rounded-lg italic">
                            Select a ticket to add to Task status
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {taskStatusList.map((item, index) => (
                                <div key={index} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl animate-fadeIn">
                                    <span className="text-xs font-bold text-slate-700 truncate mr-2">
                                        {item.title}
                                    </span>
                                    <button className="btn btn-xs btn-primary bg-[#422AD5] border-none text-[10px] hover:bg-[#3622b0]">
                                        Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Resolved Task Panel */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-700 flex items-center gap-2">
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                        Resolved Task
                    </h1>
                    <div className="mt-4 flex flex-col items-center justify-center py-6 text-center">
                        <p className="text-sm text-slate-400">No Resolved Tasks yet</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Tickets;