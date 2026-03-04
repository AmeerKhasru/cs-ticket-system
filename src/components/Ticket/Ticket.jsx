import React from 'react';

const Ticket = ({ title, status, description, id, priority, customer, createdAt , handleAddToTaskStatus }) => {
    // Status Logic: Open (Green), In-Progress (Yellow)
    const statusClass = status.toLowerCase() === 'open' 
        ? 'badge-success text-white' 
        : 'badge-warning text-white';

    // Priority Logic: Low (Green), Medium (Yellow), High (Red)
    const priorityClass = (p) => {
        const val = p.toLowerCase();
        if (val === 'low priority') return 'text-green-600';
        if (val === 'medium priority') return 'text-yellow-500';
        return 'text-red-600';
    };
 

    return (
        <div onClick={() => handleAddToTaskStatus({id, title})} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:bg-amber-200 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-slate-800 leading-tight flex-1 mr-2">{title}</h3>
                <span className={`badge badge-sm font-bold p-3 ${statusClass}`}>{status}</span>
            </div>
            
            <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                {description}
            </p>

            <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[11px] font-bold tracking-tighter">
                <div className="flex flex-col">
                    <span className="text-slate-600 font-mono">#{id}</span>
                </div>
                <div className="flex flex-col items-center ">
                    <span className={priorityClass(priority)}>{priority}</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-slate-700">{customer}</span>
                </div>
                <div className="flex flex-col items-end">
                 <span className="text-slate-700">{createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;