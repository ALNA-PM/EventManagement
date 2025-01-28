// src/components/TicketForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TicketForm = () => {
    const [ticketType, setTicketType] = useState('General');
    const [price, setPrice] = useState('');
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/tickets/', {
                ticket_type: ticketType,
                price: parseFloat(price),
                number_of_tickets: parseInt(numberOfTickets),
            });
            console.log('Ticket added:', response.data);
            navigate('/success');
        } catch (error) {
            console.error('Error adding ticket:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ticket Type:</label>
                <input
                    type="text"
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Number of Tickets:</label>
                <input
                    type="number"
                    value={numberOfTickets}
                    onChange={(e) => setNumberOfTickets(e.target.value)}
                />
            </div>
            <button type="submit">Add Ticket</button>
        </form>
    );
};

export default TicketForm;
