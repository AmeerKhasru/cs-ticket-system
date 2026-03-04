import React from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ tickets }) => {
    return (
        <div className="max-w-[1200px] mx-auto bg-base-200 rounded-2xl mt-2 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-0 py-10">
             
            {/* LEFT SIDE: Tickets (Takes 2 columns of the 3) */}
            <div className="lg:col-span-2 lg:px-4" >
                <h2 className="text-2xl font-bold text-slate-800 mr-4 mb-2">Customer Tickets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {tickets.map(ticket => (
                        <Ticket key={ticket.id} {...ticket} />
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: Status Panels (Takes 1 column of the 3) */}
            <div className="space-y-6 mt-14">
                
                {/* Task Status Panel */}
                <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-700 flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                        Task Status
                    </h1>
                    <p className="text-sm text-slate-400 mt-2 p-3 ">
                        Select a ticket to add to Task status
                    </p>
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