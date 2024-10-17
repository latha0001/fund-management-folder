import React, { useState } from 'react';
import api from '../services/api';

const FundForm = () => {
    const [name, setName] = useState('');
    const [totalValue, setTotalValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/funds/", { name, total_value: totalValue })
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Fund Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Total Value:</label>
            <input type="text" value={totalValue} onChange={(e) => setTotalValue(e.target.value)} />
            <button type="submit">Add Fund</button>
        </form>
    );
};

export default FundForm;
