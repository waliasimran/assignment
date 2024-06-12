import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        // other fields
    });

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/customers', customerData);
        alert('Customer data ingested successfully.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={customerData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={customerData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm;
