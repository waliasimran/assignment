const db = require('../config/db');

const createOrder = async (orderData) => {
    const [result] = await db.query('INSERT INTO orders SET ?', orderData);
    return result.insertId;
};

module.exports = { createOrder };
