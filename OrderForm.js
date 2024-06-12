import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [orderData, setOrderData] = useState({
        customerId: '',
        amount: '',
        // other fields
    });

    const handleChange = (e) => {
        setOrderData({
            ...orderData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/orders', orderData);
        alert('Order data ingested successfully.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="customerId"
                value={orderData.customerId}
                onChange={handleChange}
                placeholder="Customer ID"
            />
            <input
                type="number"
                name="amount"
                value={orderData.amount}
                onChange={handleChange}
                placeholder="Amount"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default OrderForm;
