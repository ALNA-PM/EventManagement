// src/components/TicketList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tickets/');
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div>
            <h2>Tickets</h2>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket._id}>
                        {ticket.ticket_type} - ${ticket.price} - {ticket.number_of_tickets} tickets
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketList;

