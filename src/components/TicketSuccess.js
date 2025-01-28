// src/components/TicketSuccess.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TicketSuccess = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuccessMessage = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/success/');
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching success message:', error);
            }
        };

        fetchSuccessMessage();
    }, []);

    const handleAddAnother = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>{message || 'Ticket Added Successfully!'}</h1>
            <button onClick={handleAddAnother}>Add Another Ticket</button>
        </div>
    );
};

export default TicketSuccess;
