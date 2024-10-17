import React, { useState, useEffect } from 'react';
import api from '../services/api';

const FundList = () => {
    const [funds, setFunds] = useState([]);

    useEffect(() => {
        api.get("/funds/")
            .then(response => setFunds(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Funds Overview</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fund Name</th>
                        <th>Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    {funds.map(fund => (
                        <tr key={fund.id}>
                            <td>{fund.name}</td>
                            <td>{fund.total_value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FundList;
