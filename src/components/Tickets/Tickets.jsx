import React from 'react';

const Tickets = ({ tickets }) => {

    
    return (
        <div>
            {tickets.map(ticket => (
                <div key={ticket.id}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Tickets;