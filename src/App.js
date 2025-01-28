import logo from './logo.svg';
import './App.css';

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import TicketSuccess from './components/TicketSuccess';
import TicketList from './components/TicketList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Add Ticket Details</h1>
                <Routes>
                    <Route path="/" element={<TicketForm />} />
                    <Route path="/tickets" element={<TicketList />} />
                    <Route path="/success" element={<TicketSuccess />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
